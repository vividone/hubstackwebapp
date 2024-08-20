export default function BillsSkeleton({ list, height }: { list: number, height: number }) {
    return (
        <div className="grid grid-cols-4 gap-5 py-5 ">
            {
                [...Array(list).keys()].map((item: number) => (
                    <div key={item} className={`rounded bg-slate-200 h-[${height}px] animate-pulse`}></div>
                ))
            }
          </div>
    )

}