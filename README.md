# react-hook-form-select

## install

```shell
~$ yarn add react-hook-form
```

## select, option element

`select` 요소는 `option` 메뉴를 제공하는 컨트롤을 나타낸다.
모든 `<option>`은 자신이 선택됐을 대 값으로써 사용할 `value` 특성을 필요로 한다.
만약, `value` 값이 없다면 해당 요소 안의 텍스트를 값으로 사용한다.

`select` 요소를 조작할 때 사용할 수 있는 여러가지 고유 특성이 존재하는데, 대표적으로

- `multiple`, 다수의 항목을 동시에 선택할 수 있다.
- `size`, 한 번에 노출되는 항목의 수를 조절할 수 있다.
- `required`, `disabled`, `autofocus`, ..., 일반적인 양식 입력 요소의 특성 또한 사용할 수 있다.

`<option>` 요소를 `<optgroup>` 요소 안에 배치하면 드롭다운 내에서 옵션 그룹을 나눌 수 있다.

## select, option with react-hook-form

`useForm()` 의 반환값으로 `register` 를 반환하며, `register` 의 파라미터값으로 속성값을 등록하면 form 내부에서 관리하는 상태로 등록된다.

```ts
const { register } = useForm();
const registeredSelect = register("select");
```

`register()` 의 반환값이 궁금하니 타입을 확인해보자. react-hook-form에서 `UseFormRegisterReturn` 타입을 제공한다. 또한, 이 반환값들은 `select`에 바로 사용가능하다.

타입 정보는 [https://react-hook-form.com/ts](https://react-hook-form.com/ts)에서 확인할 수 있다.

```tsx
<select {...register("select")}>// ...</select>
```
