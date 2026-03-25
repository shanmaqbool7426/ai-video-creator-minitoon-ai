import { Link } from 'react-router';
import { Plus, Play, Download, Share2, TrendingUp, Video, Eye, Sparkles, ArrowRight } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Videos Created', value: '12', icon: Video, gradient: 'from-purple-500 to-pink-500' },
    { label: 'Credits Left', value: '2', icon: Sparkles, gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Total Views', value: '1.2K', icon: Eye, gradient: 'from-green-500 to-emerald-500' },
    { label: 'Engagement', value: '78%', icon: TrendingUp, gradient: 'from-orange-500 to-red-500' },
  ];

  const recentVideos = [
    {
      id: 1,
      title: 'The Adventures of Little Robot',
      thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=225&fit=crop',
      duration: '2:30',
      date: '2 days ago',
      style: 'Pixar',
      views: '420',
    },
    {
      id: 2,
      title: 'Magic Forest Story',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=225&fit=crop',
      duration: '3:15',
      date: '5 days ago',
      style: 'Anime',
      views: '356',
    },
    {
      id: 3,
      title: 'Space Explorer Journey',
      thumbnail: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&h=225&fit=crop',
      duration: '2:45',
      date: '1 week ago',
      style: 'Cartoon',
      views: '289',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header with CTA */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome Back! ✨
          </h1>
          <p className="text-gray-400 text-lg">Let's create something amazing today</p>
        </div>

        <Link
          to="/create"
          className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-semibold text-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <Plus className="relative w-6 h-6" />
          <span className="relative">Generate New Video</span>
          <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

              <div className="relative flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${stat.gradient} rounded-xl shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-green-400 text-sm font-semibold">+12%</div>
              </div>

              <div className="relative">
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-4xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Videos */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Recent Videos</h2>
          <Link
            to="/library"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold group"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-4">
          {recentVideos.map((video) => (
            <div
              key={video.id}
              className="group relative flex items-center gap-6 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-purple-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative w-56 h-32 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>
              </div>

              <div className="relative flex-1">
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-purple-300 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30 font-semibold">
                    {video.style}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {video.views} views
                  </span>
                  <span>•</span>
                  <span>{video.date}</span>
                </div>
              </div>

              <div className="relative flex items-center gap-3">
                <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all text-white">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all text-white">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/create"
          className="group relative bg-gradient-to-br from-purple-600/20 to-purple-600/5 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-[1.02] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="p-3 bg-purple-500/20 rounded-xl w-fit mb-4">
              <Video className="w-6 h-6 text-purple-300" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Create Video</h3>
            <p className="text-gray-400 text-sm">Start generating your next masterpiece</p>
          </div>
        </Link>

        <Link
          to="/voice-studio"
          className="group relative bg-gradient-to-br from-blue-600/20 to-blue-600/5 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-[1.02] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="p-3 bg-blue-500/20 rounded-xl w-fit mb-4">
              <Sparkles className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Voice Studio</h3>
            <p className="text-gray-400 text-sm">Record your unique voice profile</p>
          </div>
        </Link>

        <Link
          to="/analytics"
          className="group relative bg-gradient-to-br from-green-600/20 to-green-600/5 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30 hover:border-green-500/60 transition-all hover:scale-[1.02] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-4">
              <TrendingUp className="w-6 h-6 text-green-300" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">View Analytics</h3>
            <p className="text-gray-400 text-sm">Track your video performance</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
