import { Outlet, Link, useLocation } from 'react-router';
import { Home, Video, Mic, Library, BarChart3, CreditCard, Settings, Search, User, Sparkles, Crown } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/create', label: 'Create Video', icon: Video },
    { path: '/voice-studio', label: 'Voice Studio', icon: Mic },
    { path: '/library', label: 'Story Library', icon: Library },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/billing', label: 'Billing', icon: CreditCard },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Sidebar */}
      <aside className="relative w-72 bg-gradient-to-b from-[#0f0f16]/95 to-[#0a0a0f]/95 backdrop-blur-xl border-r border-purple-500/20 flex flex-col shadow-2xl">
        <div className="p-6 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 rounded-xl shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                MiniToon AI
              </h1>
              <p className="text-xs text-purple-400/80">Premium Studio</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 scale-[1.02]'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl opacity-50 -z-10"></div>
                )}
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Pro Badge */}
        <div className="p-4 m-4 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl">
          <div className="flex items-center gap-3 mb-3">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-white">Free Plan</span>
          </div>
          <p className="text-xs text-gray-400 mb-3">
            Upgrade to unlock unlimited videos
          </p>
          <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Upgrade Now
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="relative bg-[#13131a]/80 backdrop-blur-xl border-b border-purple-500/20 px-8 py-5 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 ml-6">
              <div className="relative px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>2 Credits</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg opacity-50 -z-10"></div>
              </div>

              <button className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-purple-500/20 rounded-xl hover:bg-white/10 transition-all text-white">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-semibold">Profile</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="relative flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-purple-500/20 scrollbar-track-transparent">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
