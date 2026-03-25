import { useState } from 'react';
import { Sparkles, ChevronDown, Wand2, Video, FileText, Edit3 } from 'lucide-react';
import { toast } from 'sonner';
import { VideoGenerationProgress } from '../components/VideoGenerationProgress';

export function CreateVideo() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showScriptPreview, setShowScriptPreview] = useState(false);
  const [formData, setFormData] = useState({
    topic: '',
    style: 'pixar',
    voice: 'narrator',
    duration: 'short',
    language: 'english',
    subtitles: true,
    music: true,
  });

  const handleGenerate = () => {
    if (!formData.topic.trim()) {
      toast.error('Please enter a topic for your video');
      return;
    }

    setIsGenerating(true);
    toast.success('Video generation started!');

    // Simulate video generation
    setTimeout(() => {
      setIsGenerating(false);
      toast.success('Video generated successfully!');
      setFormData({ ...formData, topic: '' });
    }, 8000);
  };

  const handleScriptPreview = () => {
    if (!formData.topic.trim()) {
      toast.error('Please enter a topic first');
      return;
    }
    setShowScriptPreview(true);
    toast.success('Script generated! Review before creating video');
  };

  const styles = [
    {
      id: 'pixar',
      name: 'Pixar Style',
      description: '3D animated characters with charm',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&h=150&fit=crop',
    },
    {
      id: 'anime',
      name: 'Anime',
      description: 'Japanese animation style',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&h=150&fit=crop',
    },
    {
      id: 'cartoon',
      name: 'Cartoon',
      description: 'Classic 2D cartoon look',
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&h=150&fit=crop',
    },
    {
      id: 'realistic',
      name: 'Realistic',
      description: 'Photorealistic rendering',
      image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=200&h=150&fit=crop',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Create Video ✨
        </h1>
        <p className="text-gray-400 text-lg">Generate amazing animated stories with AI</p>
      </div>

      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl space-y-8">
        {/* Topic Input */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            <FileText className="inline w-4 h-4 mr-2" />
            Video Topic
          </label>
          <div className="relative">
            <textarea
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              placeholder="Describe your video story... (e.g., 'A brave little robot exploring a magical forest')"
              className="w-full px-5 py-4 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all"
              rows={5}
            />
            <div className="absolute bottom-4 right-4 text-xs text-gray-500">
              {formData.topic.length} / 500
            </div>
          </div>
        </div>

        {/* Style Selection */}
        <div>
          <label className="block text-sm font-semibold text-white mb-4">
            <Wand2 className="inline w-4 h-4 mr-2" />
            Animation Style
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setFormData({ ...formData, style: style.id })}
                className={`group relative rounded-xl overflow-hidden transition-all ${
                  formData.style === style.id
                    ? 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/50 scale-[1.02]'
                    : 'ring-1 ring-white/10 hover:ring-purple-500/50'
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {formData.style === style.id && (
                    <div className="absolute top-2 right-2 p-1.5 bg-purple-500 rounded-full">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-sm">{style.name}</p>
                  <p className="text-gray-300 text-xs">{style.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Voice and Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Voice Narrator
            </label>
            <div className="relative">
              <select
                value={formData.voice}
                onChange={(e) => setFormData({ ...formData, voice: e.target.value })}
                className="w-full px-5 py-4 bg-white/5 border border-purple-500/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
              >
                <option value="narrator">Default Narrator</option>
                <option value="voice1">My Voice 1</option>
                <option value="voice2">My Voice 2</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Video Duration
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setFormData({ ...formData, duration: 'short' })}
                className={`flex-1 px-4 py-4 rounded-xl border-2 transition-all font-semibold ${
                  formData.duration === 'short'
                    ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                    : 'border-white/10 text-gray-400 hover:border-purple-500/50'
                }`}
              >
                1-2 min
              </button>
              <button
                onClick={() => setFormData({ ...formData, duration: 'medium' })}
                className={`flex-1 px-4 py-4 rounded-xl border-2 transition-all font-semibold ${
                  formData.duration === 'medium'
                    ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                    : 'border-white/10 text-gray-400 hover:border-purple-500/50'
                }`}
              >
                3-5 min
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Options */}
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-sm font-semibold text-white mb-4">Advanced Options</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-3">
                Language
              </label>
              <div className="relative">
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full px-5 py-3 bg-white/5 border border-purple-500/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="block text-sm font-semibold text-gray-400 mb-3">
                Additional Features
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.subtitles}
                  onChange={(e) => setFormData({ ...formData, subtitles: e.target.checked })}
                  className="w-5 h-5 text-purple-600 border-purple-500/20 rounded focus:ring-purple-500 bg-white/5"
                />
                <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">Include Subtitles</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.music}
                  onChange={(e) => setFormData({ ...formData, music: e.target.checked })}
                  className="w-5 h-5 text-purple-600 border-purple-500/20 rounded focus:ring-purple-500 bg-white/5"
                />
                <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">Background Music</span>
              </label>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleScriptPreview}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-purple-500/20 text-white rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all font-semibold"
              >
                <Edit3 className="w-4 h-4" />
                Preview Script
              </button>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="group relative w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <Video className="relative w-6 h-6" />
          <span className="relative">{isGenerating ? 'Generating Your Masterpiece...' : 'Generate Video'}</span>
          <Sparkles className="relative w-6 h-6" />
        </button>
      </div>

      {/* Progress Component */}
      {isGenerating && (
        <div className="mt-6">
          <VideoGenerationProgress />
        </div>
      )}

      {/* Script Preview Modal */}
      {showScriptPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] rounded-2xl p-8 max-w-2xl w-full border border-purple-500/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Script Preview</h3>
            <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10 max-h-96 overflow-y-auto">
              <p className="text-gray-300 leading-relaxed">
                <strong>Scene 1:</strong> A brave little robot wakes up in a magical forest...<br /><br />
                <strong>Scene 2:</strong> The robot discovers glowing mushrooms and talking animals...<br /><br />
                <strong>Scene 3:</strong> Together, they embark on an adventure to find the lost treasure...
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowScriptPreview(false)}
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowScriptPreview(false);
                  handleGenerate();
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold"
              >
                Generate Video
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
