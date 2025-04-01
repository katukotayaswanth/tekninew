import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/90 to-[#020817]/70"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}