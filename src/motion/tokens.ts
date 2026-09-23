// Motion language: slow when establishing, fast when interacting, inertia over robotic.
export const EASE_ESTABLISH = [0.16, 1, 0.3, 1] as const; // long expo-out, settles with weight
export const EASE_INTERACT = [0.2, 0.8, 0.2, 1] as const;

export const DURATION = {
  establish: 1.1,
  reveal: 0.8,
  interact: 0.25,
} as const;

export const STAGGER = 0.08;
