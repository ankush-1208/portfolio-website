import { Section } from "@/components/ui/section";

interface AboutMeProps {
  personalSummary: React.ReactNode;
}

export function AboutMe({ personalSummary }: AboutMeProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">About Me</h2>
      <p className="mt-4 text-pretty font-mono text-sm text-muted-foreground">
        {personalSummary}
      </p>
    </Section>
  );
} 