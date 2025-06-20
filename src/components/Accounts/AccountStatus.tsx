import { CheckIcon } from "@heroicons/react/24/solid";

interface AccountStatusProps {
  currentStep: number;
}

const steps = ["Submitted", "Review", "Quote", "Bind", "Issue", "Renew"];

export function AccountStatus({ currentStep }: AccountStatusProps) {
  return (
    <div className="rounded-2xl w-full h-[200px] overflow-x-auto flex flex-col justify-center">
      <h2 className="text-[24px] lg:text-[28px] font-medium mb-2">Account Status</h2>
      <div className="bg-[#1e2233] pl-6 rounded-2xl  border border-[#43485A] w-full ld:min-w-[700px] box-border h-[160px]  overflow-x-auto flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-[1100px]">
          {steps.map((label, index) => {
            const isCompleted = index < currentStep;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={label}
                className={`flex flex-col items-start flex-1 ${
                  isLast ? "w-[40px]" : "w-[100px]"
                }`}
              >
                <div className="flex items-center w-full">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      isCompleted ? "border-green-400" : "border-gray-500"
                    }`}
                  >
                    <CheckIcon
                      className={`w-3 h-3 ${
                        isCompleted ? "text-green-400" : "text-gray-500"
                      }`}
                    />
                  </div>

                  {!isLast && (
                    <div
                      className={`h-px flex-1 ${
                        isCompleted
                          ? "border-t border-green-400 border-dashed"
                          : "border-t border-gray-500 border-dotted"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="mt-2 text-sm text-white text-center">
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
