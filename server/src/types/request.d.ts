import { Request } from 'express';

interface IRequest extends Request {
  user?: {
    id: number;
    firstName: string;
    lastName: string;
    updated_at: string;
    created_at: string;
  };
}
