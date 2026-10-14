import MobileHeader from "./MobileHeader";

export default function MobileLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <MobileHeader />
            {children}
        </div>
    )

}