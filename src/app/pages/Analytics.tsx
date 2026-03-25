import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Video, Eye, Clock } from 'lucide-react';

export function Analytics() {
  const monthlyData = [
    { month: 'Jan', videos: 4, views: 320 },
    { month: 'Feb', videos: 6, views: 450 },
    { month: 'Mar', videos: 12, views: 1200 },
  ];

  const topVideos = [
    {
      id: 1,
      title: 'Underwater Kingdom',
      views: '421',
      engagement: '85%',
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=60&fit=crop',
    },
    {
      id: 2,
      title: 'Time Travel Adventure',
      views: '356',
      engagement: '78%',
      thumbnail: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=100&h=60&fit=crop',
    },
    {
      id: 3,
      title: 'Space Explorer Journey',
      views: '312',
      engagement: '72%',
      thumbnail: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=100&h=60&fit=crop',
    },
  ];

  const stats = [
    { label: 'Total Videos', value: '12', icon: Video, change: '+20%' },
    { label: 'Total Views', value: '1.2K', icon: Eye, change: '+35%' },
    { label: 'Avg Watch Time', value: '2:45', icon: Clock, change: '+8%' },
    { label: 'Engagement Rate', value: '78%', icon: TrendingUp, change: '+12%' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track your video performance and growth</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Videos Created Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Videos Created</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="videos" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Views Growth Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Views Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#9333ea"
                strokeWidth={3}
                dot={{ fill: '#9333ea', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performing Videos */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Videos</h2>

        <div className="space-y-4">
          {topVideos.map((video, index) => (
            <div
              key={video.id}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold">
                {index + 1}
              </div>

              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-24 h-14 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{video.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {video.views} views • {video.engagement} engagement
                </p>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{video.views}</div>
                <p className="text-sm text-gray-500">views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
