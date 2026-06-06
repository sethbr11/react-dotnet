import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { test, expect, vi, beforeEach, afterEach } from 'vitest';
import App from './App';

beforeEach(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue(
    new Response(JSON.stringify([]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }),
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('renders BLE Bowlers header', async () => {
  render(<App />);
  const headerElement = screen.getByText(/BLE Bowlers/i);
  expect(headerElement).toBeInTheDocument();

  // Wait for the fetch-triggered state update to complete so React
  // doesn't warn about an unwrapped update after the test ends.
  await waitFor(() => {
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });
});
