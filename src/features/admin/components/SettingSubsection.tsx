import { ReactNode } from "react";

const SettingSubsection = ({children}: {children: ReactNode}) => {
    return (
        <section className="flex flex-col gap-4 bg-foreground/5 rounded-lg px-6 py-8 w-full md:w-auto">
            {children}
        </section>
    );
};

function SubsectionHeading({children}: {children: ReactNode}) {
    return (
        <div className="mb-4">{children}</div>
    )
};

function SubsectionTitle({children}: {children: ReactNode}) {
    return (
        <h2 className="font-serif mb-2 text-[clamp(18px,14vw,24px)] font-semibold">{children}</h2>
    )
};

function SubsectionDescription({children}: {children: ReactNode}) {
    return (
        <p className="text-[11px] text-foreground/60 font-light tracking-widest">{children}</p>
    )
};

SettingSubsection.Heading = SubsectionHeading;
SettingSubsection.Title = SubsectionTitle;
SettingSubsection.Description = SubsectionDescription;

export default SettingSubsection;