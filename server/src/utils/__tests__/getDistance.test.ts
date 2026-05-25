import { getDistance } from '../getDistance';

describe('getDistance', () => {
  test('should return 0 for identical points', () => {
    const point = { lat: 48.8566, lng: 2.3522 }; // Paris
    const result = getDistance(point, point);
    expect(result).toBe(0);
  });

  test('should calculate distance correctly between Paris and London', () => {
    const paris = { lat: 48.8566, lng: 2.3522 };
    const london = { lat: 51.5074, lng: -0.1278 };
    const result = getDistance(paris, london);

    // Distance between Paris and London is approximately 340 km
    expect(result).toBeGreaterThan(330);
    expect(result).toBeLessThan(350);
  });

  test('should calculate distance with inverted coordinates', () => {
    const point1 = { lat: 48.8566, lng: 2.3522 }; // Paris
    const point2 = { lat: 51.5074, lng: -0.1278 }; // London

    const distance1 = getDistance(point1, point2);
    const distance2 = getDistance(point2, point1);

    // Distance should be the same regardless of order
    expect(distance1).toBe(distance2);
  });

  test('should return positive distance', () => {
    const point1 = { lat: 48.8566, lng: 2.3522 }; // Paris
    const point2 = { lat: 51.5074, lng: -0.1278 }; // London
    const point3 = { lat: 35.6762, lng: 139.6503 }; // Tokyo

    const distance1 = getDistance(point1, point2);
    const distance2 = getDistance(point1, point3);
    const distance3 = getDistance(point2, point3);

    expect(distance1).toBeGreaterThanOrEqual(0);
    expect(distance2).toBeGreaterThanOrEqual(0);
    expect(distance3).toBeGreaterThanOrEqual(0);
  });
});
