interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative min-h-[500px] pt-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/90 to-[#020817]/70" />
      </div>
      <div className="relative z-10 text-center px-6 sm:px-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
