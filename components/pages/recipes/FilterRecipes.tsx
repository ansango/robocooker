import { selectBlenders } from "@/store/features/blenders";
import { getBlenders } from "@/store/features/blenders/thunks";
import { selectCategories } from "@/store/features/categories";
import { getCategories } from "@/store/features/categories/thunks";
import {
  resetFilters,
  selectFilters,
  selectSearchQuery,
  setFilters,
} from "@/store/features/search";

import { filteredSearch, search } from "@/store/features/search/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Checkbox, Form } from "components/common/Forms";
import Modal from "components/common/Modal/Modal";
import ModalAction from "components/common/Modal/ModalAction";
import ModalBox from "components/common/Modal/ModalBox";
import ModalContent from "components/common/Modal/ModalContent";
import ModalTitle from "components/common/Modal/ModalTitle";
import { closeModal } from "components/common/Modal/utils";
import { FC, useCallback, useEffect } from "react";

const FilterRecipes: FC<{ id: string }> = ({ id }) => {
  const categories = useAppSelector(selectCategories);
  const blenders = useAppSelector(selectBlenders);
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectSearchQuery);
  const filters = useAppSelector(selectFilters);
  //TODO ESTO ES UNA MIERDA, SE DEBE REVISAR, REPITE QUERIES
  useEffect(() => {
    if (!blenders) dispatch(getBlenders());
    if (!categories) dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = useCallback(
    (data: { [key: string]: any }) => {
      const filtersSelected: string[] = Object.keys(data).filter(
        (key) => data[key] === true
      );

      dispatch(setFilters(filtersSelected));
      dispatch(search({ query: query ?? "", filters: filtersSelected }));
      closeModal(id);
    },
    [dispatch, query, id]
  );

  return (
    <Modal id={id}>
      <ModalBox id={id}>
        <Form onSubmit={onSubmit}>
          <ModalTitle label="Filtros" />
          <ModalContent>
            <div className="space-y-5">
              <div>
                <h6 className="font-semibold py-2">Robots</h6>

                <div className="capitalize grid gap-1 grid-cols-2 sm:grid-cols-3">
                  {blenders &&
                    blenders.map(({ name }, index) => {
                      const isChecked = filters.includes(name);
                      return (
                        <Checkbox
                          key={index}
                          name={name}
                          label={name}
                          checked={isChecked}
                        />
                      );
                    })}
                </div>
              </div>
              <div>
                <h6 className="font-semibold py-2">Categorías</h6>
                <div className="capitalize grid gap-1 grid-cols-2 sm:grid-cols-3">
                  {categories &&
                    categories.map(({ name }, index) => {
                      const isChecked = filters.includes(name);
                      return (
                        <Checkbox
                          key={index}
                          name={name}
                          label={name}
                          checked={isChecked}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </ModalContent>
          <ModalAction>
            <button className="btn normal-case btn-primary" type="submit">
              Aplicar filtros
            </button>
          </ModalAction>
        </Form>
      </ModalBox>
    </Modal>
  );
};

export default FilterRecipes;
