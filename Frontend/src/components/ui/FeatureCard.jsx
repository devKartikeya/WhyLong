export default function FeatureCard({ icon: Icon, title, children }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Icon size={22} />
            </div>
            <h3 className="mb-2 font-semibold text-slate-900">{title}</h3>
            <p className="text-sm leading-7 text-slate-600">{children}</p>
        </div>
    );
}