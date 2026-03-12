'use client';

import { useEffect } from 'react';
import { useI18n } from '@/lib/i18n/context';

export function LangUpdater() {
  const { locale } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
