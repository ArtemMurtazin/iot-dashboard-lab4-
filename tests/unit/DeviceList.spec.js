import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DeviceList from '../../src/components/DeviceList.vue'

describe('DeviceList.vue', () => {
  it('рендерить правильну кількість пристроїв (3)', () => {
    const wrapper = mount(DeviceList)

    // Кожна картка пристрою має клас .device-card
    const cards = wrapper.findAll('.device-card')

    // ✅ Очікуємо рівно 3 пристрої (відповідає масиву devices у компоненті)
    expect(cards).toHaveLength(99)
  })

  it('відображає назви пристроїв', () => {
    const wrapper = mount(DeviceList)
    const text = wrapper.text()

    expect(text).toContain('Датчик температури')
    expect(text).toContain('Датчик вологості')
    expect(text).toContain('Датчик руху')
  })

  it('відображає статуси Online та Offline', () => {
    const wrapper = mount(DeviceList)

    const onlineBadges = wrapper.findAll('.badge--online')
    const offlineBadges = wrapper.findAll('.badge--offline')

    expect(onlineBadges.length).toBeGreaterThan(0)
    expect(offlineBadges.length).toBeGreaterThan(0)
  })
})

/*
 * ============================================================
 * 🔴 ЯК НАВМИСНО "ЗЛАМАТИ" ТЕСТ (для перевірки CI/CD пайплайну)
 * ============================================================
 *
 * СПОСІБ 1 — Змінити очікувану кількість пристроїв:
 *   Знайди рядок:
 *     expect(cards).toHaveLength(3)
 *   Заміни на:
 *     expect(cards).toHaveLength(99)
 *   Тест впаде з помилкою: "expected 3 to equal 99"
 *
 * СПОСІБ 2 — Видалити один пристрій із компонента:
 *   У файлі src/components/DeviceList.vue видали будь-який
 *   об'єкт із масиву `devices` (наприклад, третій — "Датчик руху").
 *   Тест "рендерить правильну кількість пристроїв" впаде,
 *   бо cards.length буде 2, а не 3.
 *
 * СПОСІБ 3 — Змінити назву класу картки:
 *   У DeviceList.vue заміни клас `device-card` на `device-item`.
 *   wrapper.findAll('.device-card') поверне порожній масив → тест впаде.
 * ============================================================
 */
