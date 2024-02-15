import { cn } from "@/lib/utils";

export function TypographyH1({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <h1 className={cn(`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl, ${className}}`)}>
            {children}
        </h1>
    )
}

export function TypographyH2({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <h2 className={cn(`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0, ${className}}`)}>
            {children}
        </h2>
    )
}

export function TypographyH3({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <h3 className={cn(`scroll-m-20 text-2xl font-semibold tracking-tight, ${className}}`)}>
            {children}
        </h3>
    )
}

export function TypographyH4({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <h4 className={cn(`scroll-m-20 text-xl font-semibold tracking-tight, ${className}}`)}>
            {children}
        </h4>
    )
}

export function TypographyInlineCode({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <h5 className={cn(`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold, ${className}}`)}>
            {children}
        </h5>
    )
}

export function TypographyLead({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <p className={cn(`text-xl text-muted-foreground, ${className}}`)}>
            {children}
        </p>
    )
}

export function TypographyLarge({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <div className={cn(`text-lg font-semibold, ${className}}`)}>
            {children}
        </div>
    )
}

export function TypographySmall({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <div className={cn(`text-sm font-medium leading-none, ${className}}`)}>
            {children}
        </div>
    )
}

export function TypographyMuted({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <p className={cn(`text-sm text-muted-foreground, ${className}}`)}>
            {children}
        </p>
    )
}