import { Check, Zap, Crown, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export function Billing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: [
        '10 video credits per month',
        'Basic animation styles',
        'Standard voice narration',
        'Basic support',
      ],
      current: true,
      icon: Zap,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: [
        '100 video credits per month',
        'All animation styles',
        'Custom voice cloning',
        'Priority support',
        'HD video quality',
        'Advanced editing tools',
      ],
      current: false,
      icon: Crown,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      features: [
        'Unlimited video credits',
        'All animation styles',
        'Unlimited voice cloning',
        '24/7 premium support',
        '4K video quality',
        'API access',
        'Custom branding',
        'Team collaboration',
      ],
      current: false,
      icon: Sparkles,
    },
  ];

  const handleUpgrade = (planName: string) => {
    toast.success(`Upgrading to ${planName} plan...`);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Billing & Plans</h1>
        <p className="text-gray-600 mt-1">Choose the perfect plan for your needs</p>
      </div>

      {/* Current Usage */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Usage</h2>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Credits Used</span>
          <span className="font-semibold text-gray-900">8 / 10</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full"
            style={{ width: '80%' }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Your plan renews on April 1, 2026
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-md border-2 p-8 relative ${
                plan.popular
                  ? 'border-purple-600'
                  : plan.current
                  ? 'border-green-500'
                  : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              {plan.current && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                  Current Plan
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleUpgrade(plan.name)}
                disabled={plan.current}
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  plan.current
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
              >
                {plan.current ? 'Current Plan' : 'Upgrade Now'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 mt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment History</h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200">
            <div>
              <p className="font-semibold text-gray-900">Free Plan</p>
              <p className="text-sm text-gray-600">Started on March 1, 2026</p>
            </div>
            <span className="text-green-600 font-medium">$0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
