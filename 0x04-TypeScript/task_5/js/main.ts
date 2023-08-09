export interface MajorCredits {
  credits: number;
  majorBrandProperty: 'Samsung'; 
}

export interface MinorCredits {
  credits: number;
  minorBrandProperty: 'Apple';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}

export function sumMinorCredits(subject1: MajorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}
