import React from 'react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Check, Star, X } from 'lucide-react';
import type { BillingPeriod, PricingPlan } from '@/types/pricing';
import { pricingColorClasses } from '@/constants';



interface PricingCardProps {
  plan: PricingPlan;
  period: BillingPeriod;
  animationDelayMs?: number;
}

const getMonthlyPrice = (plan: PricingPlan, period: BillingPeriod) =>
  period === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12);

const PricingCard: React.FC<PricingCardProps> = ({ plan, period, animationDelayMs = 0 }) => {
  const colors = pricingColorClasses[plan.color];
  const Icon = plan.icon;

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in ${
        plan.popular ? 'ring-2 ring-indigo-500 transform scale-105' : 'hover:scale-105'
      }`}
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
          <Star className="inline h-4 w-4 mr-1" />
          Most Popular
        </div>
      )}

      <CardHeader className={plan.popular ? 'pt-12' : 'pt-6'}>
        <div className="flex items-center justify-center mb-4">
          <div className={`p-3 rounded-full bg-gradient-to-r ${colors.gradient}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>

        <CardTitle className="text-2xl font-bold text-center text-gray-900">{plan.name}</CardTitle>
        <p className="text-gray-600 text-center mt-2">{plan.description}</p>

        <div className="text-center mt-6">
          <div className="flex items-baseline justify-center min-h-[3rem]">
            <span className="text-4xl font-bold text-gray-900 transition-all duration-300">
              ${getMonthlyPrice(plan, period)}
            </span>
            <span className="text-gray-600 ml-1">/month</span>
          </div>
          <div className="min-h-[1.5rem] transition-all duration-300">
            {period === 'yearly' && (
              <p className="text-sm text-gray-500 mt-1 animate-fade-in">Billed annually (${plan.yearlyPrice}/year)</p>
            )}
          </div>
          <p className={`text-sm font-medium mt-2 ${colors.badge} px-3 py-1 rounded-full inline-block`}>{plan.students}</p>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <Button className={`w-full mb-6 bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white transition-all duration-200`} size="lg">
          {plan.cta}
        </Button>

        <div className="space-y-3">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}

          {plan.notIncluded.map((feature, idx) => (
            <div key={idx} className="flex items-start opacity-60">
              <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-500 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;


