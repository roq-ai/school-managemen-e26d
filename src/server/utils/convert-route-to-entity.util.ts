const mapping: Record<string, string> = {
  attendances: 'attendance',
  exams: 'exam',
  fees: 'fee',
  schools: 'school',
  timetables: 'timetable',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
