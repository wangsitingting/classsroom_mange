import { logAdapter } from './adapter';

export const flowStatistics = async () =>
  await logAdapter.get("/login.do?username=123&password=123456");