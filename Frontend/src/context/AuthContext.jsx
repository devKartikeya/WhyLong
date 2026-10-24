import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";

const AuthContext = createContext({
    user: null,
    authLoading: true,
    refreshAuth: async () => { }
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    const refreshAuth = useCallback(async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/users/me`,
                {
                    method: "GET",
                    credentials: "include"
                }
            );

            if (!response.ok) {
                setUser(null);
                return;
            }

            const result = await response.json();
            setUser(result.user);
        } catch (error) {
            console.error("Authentication check failed:", error);
            setUser(null);
        } finally {
            setAuthLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshAuth();
    }, [refreshAuth]);

    const value = useMemo(
        () => ({ user, authLoading, refreshAuth }),
        [user, authLoading, refreshAuth]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);