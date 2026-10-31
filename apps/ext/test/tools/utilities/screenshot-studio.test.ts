import { describe, beforeEach, vi, it, expect } from 'vitest';
import {
  bakeAnnotatedImage,
  screenshotStudio,
} from '@/tools/utilities/screenshot-studio';
import { runStandardToolTests } from '../../helpers';

describe('screenshotStudio', () => {
  beforeEach(() => {
    document.body.textContent = '';
    vi.clearAllMocks();
  });

  runStandardToolTests(screenshotStudio, {
    id: 'screenshot-studio',
    name: 'Screenshot Studio',
    category: 'utility',
    icon: 'Camera',
  }, {
    captureMode: 'viewport',
    format: 'png',
    quality: 90,
    includeBackground: true,
  });

  it('exports a different png when a stroke was drawn', () => {
    const img = document.createElement('img');
    img.src = 'data:image/png;base64,raw';
    Object.defineProperty(img, 'naturalWidth', { value: 8 });
    Object.defineProperty(img, 'naturalHeight', { value: 8 });
    const strokes: string[] = [];
    HTMLCanvasElement.prototype.getContext = (() =>
      ({
        drawImage() {},
        clearRect() {},
        beginPath() {},
        moveTo() {},
        lineTo() {
          strokes.push('line');
        },
        stroke() {
          strokes.push('stroke');
        },
        fillText() {},
        set strokeStyle(_value: string) {},
        set fillStyle(_value: string) {},
        set lineWidth(_value: number) {},
        set font(_value: string) {},
      }) as unknown) as typeof HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.toDataURL = () => 'data:image/png;base64,baked';

    expect(bakeAnnotatedImage(img, [])).toBe(img.src);
    const baked = bakeAnnotatedImage(img, [
      { kind: 'pen', points: [{ x: 1, y: 1 }, { x: 4, y: 4 }] },
    ]);
    expect(baked).not.toBe(img.src);
    expect(strokes).toContain('stroke');
  });

  it('should have capture mode select', () => {
    const schema = screenshotStudio.configSchema;
    expect(schema.captureMode).toBeDefined();
    expect(schema.captureMode.type).toBe('select');
  });
});
