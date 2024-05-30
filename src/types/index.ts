export interface NavigationInterface
  extends Record<string, object | undefined> {
  // Add index signature for type 'string'
  [key: string]: object | undefined;
}
