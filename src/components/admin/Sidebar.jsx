import { LayoutDashboard, ShoppingBag, Calendar, Users, BarChart3, Settings, X } from "lucide-react";

export default function Sidebar({ activeItem, onItemClick, isOpen, onClose }) {
  const navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "orders", icon: ShoppingBag, label: "Orders" },
    { id: "reservations", icon: Calendar, label: "Reservations" },
    { id: "staff", icon: Users, label: "Staff" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside
      className={`w-64 bg-sidebar text-sidebar-foreground h-screen fixed left-0 top-0 border-r border-sidebar-border flex flex-col z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Bonds & Bites</h1>
          <p className="text-xs text-sidebar-foreground/60 mt-1">
            Restaurant Management
          </p>
        </div>

        {/* Close button (mobile) */}
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-accent rounded-lg p-4">
          <p className="text-xs text-sidebar-accent-foreground/60">
            Version 2.4.1
          </p>
          <p className="text-xs text-sidebar-accent-foreground/80 mt-1">
            © 2026 Bonds & Bites
          </p>
        </div>
      </div>
    </aside>
  );
}