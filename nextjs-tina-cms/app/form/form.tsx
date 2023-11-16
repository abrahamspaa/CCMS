'use client';

import { useTina, tinaField } from "tinacms/dist/react";
import { Button, Input, Space } from 'antd';
import styles from '@agent-tina-css/app/page.module.css';
import { FormQuery } from "@agent-tina-css/tina/__generated__/types"

export default function DyanmicForm (props: {
  data: FormQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const {data} = useTina(props);

  return (
    <main className={styles.main}>
      <h2 data-tina-field={tinaField(data.form, 'title')}>{data?.form?.title}</h2>
      <Space direction="vertical">
        {data.form.fields?.map((dynamicfield, index) => {
          switch (dynamicfield?.field) {
            case 'Input': {
              return (
                <Input placeholder={dynamicfield?.label ?? ''} key={index} data-tina-field={tinaField(dynamicfield, 'label')}/>
              )
            }
            case 'Button': {
              return (
                <Button type={dynamicfield?.style ?? 'primary'} key={index} data-tina-field={tinaField(dynamicfield, 'label')}>{dynamicfield?.label ?? ''}</Button>
              )
            }
          }
        })}
      </Space>
    </main>
  )
}