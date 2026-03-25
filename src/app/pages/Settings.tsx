import { User, Mail, Lock, Bell, Globe } from 'lucide-react';
import { toast } from 'sonner';

export function Settings() {
  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account preferences</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              defaultValue="Creating amazing animated stories with AI"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Email Preferences */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Email Preferences</h2>
        </div>

        <div className="space-y-3">
          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Video Generation Updates</p>
              <p className="text-sm text-gray-600">Get notified when your videos are ready</p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
          </label>

          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Weekly Reports</p>
              <p className="text-sm text-gray-600">Receive weekly analytics and insights</p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
          </label>

          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Marketing Emails</p>
              <p className="text-sm text-gray-600">News, tips, and special offers</p>
            </div>
            <input
              type="checkbox"
              className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
          </label>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        </div>

        <div className="space-y-3">
          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Push Notifications</p>
              <p className="text-sm text-gray-600">Receive notifications in your browser</p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
          </label>

          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Sound Alerts</p>
              <p className="text-sm text-gray-600">Play sound for important updates</p>
            </div>
            <input
              type="checkbox"
              className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
          </label>
        </div>
      </div>

      {/* Language & Region */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Language & Region</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Zone
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (Central European)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Security</h2>
        </div>

        <div className="space-y-4">
          <button className="w-full text-left p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
            <p className="font-medium text-gray-900">Change Password</p>
            <p className="text-sm text-gray-600 mt-1">Update your password regularly</p>
          </button>

          <button className="w-full text-left p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
            <p className="font-medium text-gray-900">Two-Factor Authentication</p>
            <p className="text-sm text-gray-600 mt-1">Add an extra layer of security</p>
          </button>

          <button className="w-full text-left p-4 rounded-xl border border-red-200 hover:bg-red-50 transition-colors text-red-600">
            <p className="font-medium">Delete Account</p>
            <p className="text-sm mt-1">Permanently delete your account and data</p>
          </button>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-medium text-lg"
      >
        Save Changes
      </button>
    </div>
  );
}
