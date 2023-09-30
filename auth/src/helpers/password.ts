import bcrypt from 'bcrypt';

// Just for testing
const saltRound = 2;

export const toHash = (password: string) => bcrypt.hash(password, saltRound);

export const compareHash = (supplied: string, stored: string) => bcrypt.compare(supplied, stored);
