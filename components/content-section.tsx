import { ReactNode } from "react"

type ContentSectionProps = {
    title: string
    children: ReactNode
    className?: string
}

export function ContentSection({ title, children, className = "" }: ContentSectionProps) {
    return (
        <section className={`py-12 lg:py-16 ${className}`}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">{title}</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}
