
import ArrowIcon from './ArrowIcon'

type ArticleItemProps = {
  category: string;
  date: string;
  title: string;
  noBorder?: boolean;
};


const ArticleItem = ({ category, date, title, noBorder }: ArticleItemProps) => {
  return (
    <a className="group block py-10 transition-all duration-300" href="#">
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1">

          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-label font-bold tracking-widest uppercase text-primary">
              {category}
            </span>
            <span className="text-[10px] font-label text-outline tracking-widest uppercase">
              {date}
            </span>
          </div>

          <h3 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>
        </div>

        <ArrowIcon />
      </div>

      {!noBorder && (
        <div className="mt-8 h-[1px] w-full bg-surface-container-highest group-hover:bg-primary/20 transition-colors" />
      )}
    </a>
  )
}

export default ArticleItem