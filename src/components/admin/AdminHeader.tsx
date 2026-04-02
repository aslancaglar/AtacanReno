import React from "react";

interface AdminHeaderProps {
  title: string;
  description: string;
  actionButton?: React.ReactNode;
}

export function AdminHeader({ title, description, actionButton }: AdminHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-extrabold text-nav">{title}</h1>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
      {actionButton && <div>{actionButton}</div>}
    </div>
  );
}
