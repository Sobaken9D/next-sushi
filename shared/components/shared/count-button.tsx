import {cn} from "@/shared/lib/utils";
import {CountIconButton} from "@/shared/components/shared/count-icon-button";

export interface CountButtonProps {
  value: number;
  size?: 'sm' | 'lg';
  onClick?: (type: 'plus' | 'minus') => void;
  className?: string;
}

export const CountButton = ({
  value = 1,
  size = 'sm',
  onClick,
  className
}: CountButtonProps) => {
  return (
    <div className={cn('inline-flex items-center justify-between gap-3', className)}>
      <CountIconButton
        onClick={() => onClick?.('minus')}
        size={size}
        type={"minus"}
        disabled={value === 1}
      />

      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>

      <CountIconButton
        onClick={() => onClick?.('plus')}
        size={size}
        type={"plus"}
      />
    </div>
  );
}

