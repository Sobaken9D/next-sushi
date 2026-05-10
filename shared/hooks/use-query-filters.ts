import {Filters} from "@/shared/hooks/use-filters";
import {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";
import qs from 'qs';

export const useQueryFilters = (filters: Filters) => {
  const isMounted = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
      };

      const query = qs.stringify(params, {
        arrayFormat: 'comma',
      });

      // получаем значения после #
      const hash = window.location.hash;

      router.push(`?${query}${hash}`, {
        scroll: false,
      });
    }

    // isMounted - Предотвращает обновление URL при первоначальном монтировании компонента
    // Без этого при загрузке страницы сразу происходило обновление URL, которое снова триггерило ререндер

    isMounted.current = true;
  }, [filters]);
};