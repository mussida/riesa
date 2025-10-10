export * from './quotes.service';
import { QuotesService } from './quotes.service';
export * from './wines.service';
import { WinesService } from './wines.service';
export const APIS = [QuotesService, WinesService];
