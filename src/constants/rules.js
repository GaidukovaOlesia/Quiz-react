export const rulesText = {
  required: (field) => `${field} is required.`,
  minLength: (length) => `At least ${length} characters.`,
  maxLength: (length) => `Less than ${length} characters.`,
};

export const quizRules = {
  nameQuiz: {
    required: { value: true, message: rulesText.required('quizName') },
    minLength: { value: 3, message: rulesText.minLength(2) },
    maxLength: { value: 16, message: rulesText.maxLength(16) },
  },
  avatar: {
    required: { value: true, message: rulesText.required('Photo') },
  },
  description: {
    required: { value: true, message: rulesText.required('Description') },
    minLength: { value: 50, message: rulesText.minLength(50) },
    maxLength: { value: 1000, message: rulesText.maxLength(1000) },
  },
};
