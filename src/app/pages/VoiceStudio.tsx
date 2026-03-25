import { useState } from 'react';
import { Mic, Upload, Play, Trash2, MicOff } from 'lucide-react';
import { toast } from 'sonner';

export function VoiceStudio() {
  const [isRecording, setIsRecording] = useState(false);
  const [voices, setVoices] = useState([
    { id: 1, name: 'My Voice 1', duration: '0:45', date: '2 days ago' },
    { id: 2, name: 'My Voice 2', duration: '1:20', date: '1 week ago' },
  ]);

  const handleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      toast.success('Recording started');

      setTimeout(() => {
        setIsRecording(false);
        toast.success('Recording saved successfully!');
        setVoices([
          { id: Date.now(), name: `My Voice ${voices.length + 1}`, duration: '0:30', date: 'Just now' },
          ...voices,
        ]);
      }, 3000);
    } else {
      setIsRecording(false);
      toast.info('Recording stopped');
    }
  };

  const handleUpload = () => {
    toast.success('Voice file uploaded successfully!');
    setVoices([
      { id: Date.now(), name: `My Voice ${voices.length + 1}`, duration: '1:15', date: 'Just now' },
      ...voices,
    ]);
  };

  const handleDelete = (id: number) => {
    setVoices(voices.filter((v) => v.id !== id));
    toast.success('Voice deleted');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Voice Studio</h1>
        <p className="text-gray-600 mt-1">Record or upload your voice for personalized narration</p>
      </div>

      {/* Record Section */}
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Record Your Voice</h2>

        <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
          <button
            onClick={handleRecord}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg'
            }`}
          >
            {isRecording ? (
              <MicOff className="w-12 h-12 text-white" />
            ) : (
              <Mic className="w-12 h-12 text-white" />
            )}
          </button>

          <p className="text-gray-600 mt-6 text-center">
            {isRecording ? 'Recording... Click to stop' : 'Click the microphone to start recording'}
          </p>

          {isRecording && (
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-red-500 font-medium">Recording in progress</span>
            </div>
          )}
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload Audio File</h2>

        <label className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-400 transition-colors">
          <Upload className="w-12 h-12 text-gray-400" />
          <p className="text-gray-600 mt-4">Click to upload audio file</p>
          <p className="text-sm text-gray-400 mt-2">Supported formats: MP3, WAV, M4A</p>
          <input
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>

      {/* Saved Voices */}
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Voice Library</h2>

        {voices.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Mic className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No voices recorded yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {voices.map((voice) => (
              <div
                key={voice.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{voice.name}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                    <span>Duration: {voice.duration}</span>
                    <span>•</span>
                    <span>{voice.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
                    <Play className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => handleDelete(voice.id)}
                    className="p-2 rounded-lg border border-red-300 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
