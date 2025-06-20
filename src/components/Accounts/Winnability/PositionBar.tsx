type PositionBarProps = {
  value: number;
  label: string | number;
  labelColor?: string;
  width?: string;
  height?: string;
  background?: string;
  gradient?: string;
};

export function PositionBar({
  value,
  label,
  labelColor = "#fff",
  width = "150px",
  height = "6px",
  background = "#313853",
  gradient = "linear-gradient(90deg, #313b59 0%, #3a7ff1 100%)",
}: PositionBarProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="flex items-center gap-3">
      <div
        className="relative overflow-hidden rounded-r-full"
        style={{ width, height, background }}
      >
        <div
          className="absolute top-0 left-0 h-full transition-all duration-300"
          style={{
            width: `${safeValue}%`,
            background: gradient,
            borderRadius: "0 9999px 9999px 0",
          }}
        />
      </div>
      <span className="text-xs" style={{ color: labelColor }}>
        {label}
      </span>
    </div>
  );
}
        