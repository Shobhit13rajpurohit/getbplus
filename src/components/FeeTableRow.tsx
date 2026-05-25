interface FeeTableRowProps {
  item: string;
  cost: string;
  notes: string;
  isFree?: boolean;
}

export default function FeeTableRow({ item, cost, notes, isFree = false }: FeeTableRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5 border-b border-gray-200 hover:bg-offWhite/50 transition-colors px-4">
      <div className="md:col-span-5 flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full shrink-0 ${isFree ? 'bg-success' : 'bg-gold'}`} />
        <span className="font-sans font-medium text-navy text-[16px]">{item}</span>
      </div>

      <div className="md:col-span-3 flex items-center">
        <span className={`font-sans font-semibold text-[16px] ${isFree ? 'text-success' : 'text-navy'}`}>
          {cost}
        </span>
      </div>

      <div className="md:col-span-4 flex items-center">
        <span className="font-sans text-[14px] text-gray-500">
          {notes}
        </span>
      </div>
    </div>
  );
}