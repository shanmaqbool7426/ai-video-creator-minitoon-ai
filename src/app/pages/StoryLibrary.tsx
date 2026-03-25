import { useState } from 'react';
import { Play, Download, Share2, Filter, Grid3x3, List } from 'lucide-react';

export function StoryLibrary() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterStyle, setFilterStyle] = useState('all');

  const videos = [
    {
      id: 1,
      title: 'The Adventures of Little Robot',
      thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=300&fit=crop',
      duration: '2:30',
      date: 'March 22, 2026',
      style: 'Pixar',
      views: '245',
    },
    {
      id: 2,
      title: 'Magic Forest Story',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop',
      duration: '3:15',
      date: 'March 19, 2026',
      style: 'Anime',
      views: '189',
    },
    {
      id: 3,
      title: 'Space Explorer Journey',
      thumbnail: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&h=300&fit=crop',
      duration: '2:45',
      date: 'March 17, 2026',
      style: 'Cartoon',
      views: '312',
    },
    {
      id: 4,
      title: 'Underwater Kingdom',
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      duration: '3:00',
      date: 'March 15, 2026',
      style: 'Pixar',
      views: '421',
    },
    {
      id: 5,
      title: 'Dragon Mountain Quest',
      thumbnail: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop',
      duration: '2:20',
      date: 'March 12, 2026',
      style: 'Anime',
      views: '278',
    },
    {
      id: 6,
      title: 'Time Travel Adventure',
      thumbnail: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=300&fit=crop',
      duration: '3:30',
      date: 'March 10, 2026',
      style: 'Cartoon',
      views: '356',
    },
  ];

  const filteredVideos = filterStyle === 'all'
    ? videos
    : videos.filter(v => v.style.toLowerCase() === filterStyle);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Story Library</h1>
        <p className="text-gray-600 mt-1">All your generated videos in one place</p>
      </div>

      {/* Filters and View Toggle */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={filterStyle}
              onChange={(e) => setFilterStyle(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Styles</option>
              <option value="pixar">Pixar</option>
              <option value="cartoon">Cartoon</option>
              <option value="anime">Anime</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Grid3x3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Videos Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded">
                    {video.style}
                  </span>
                  <span>•</span>
                  <span>{video.views} views</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{video.date}</p>

                <div className="flex items-center gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
                    <Play className="w-4 h-4" />
                    Play
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-md p-4 border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-48 h-28 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{video.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">
                    {video.style}
                  </span>
                  <span>Duration: {video.duration}</span>
                  <span>•</span>
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span>{video.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
                  <Play className="w-4 h-4" />
                  Play
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4 text-gray-700" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
