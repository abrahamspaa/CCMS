//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  page: Page;
  pageConnection: PageConnection;
  form: Form;
  formConnection: FormConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
};


export type QueryFormArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFormConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FormFilter>;
};

export type DocumentFilter = {
  page?: InputMaybe<PageFilter>;
  form?: InputMaybe<FormFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Page | Form | Folder;

export type PageBlocksWelcomeHero = {
  __typename?: 'PageBlocksWelcomeHero';
  message?: Maybe<Scalars['JSON']['output']>;
  image?: Maybe<Scalars['String']['output']>;
};

export type PageBlocks = PageBlocksWelcomeHero;

export type Page = Node & Document & {
  __typename?: 'Page';
  title?: Maybe<Scalars['String']['output']>;
  blocks?: Maybe<Array<Maybe<PageBlocks>>>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageBlocksWelcomeHeroFilter = {
  message?: InputMaybe<RichTextFilter>;
  image?: InputMaybe<ImageFilter>;
};

export type PageBlocksFilter = {
  welcomeHero?: InputMaybe<PageBlocksWelcomeHeroFilter>;
};

export type PageFilter = {
  title?: InputMaybe<StringFilter>;
  blocks?: InputMaybe<PageBlocksFilter>;
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Page>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type FormFields = {
  __typename?: 'FormFields';
  label?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
};

export type Form = Node & Document & {
  __typename?: 'Form';
  title?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<Maybe<FormFields>>>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type FormFieldsFilter = {
  label?: InputMaybe<StringFilter>;
  field?: InputMaybe<StringFilter>;
  style?: InputMaybe<StringFilter>;
};

export type FormFilter = {
  title?: InputMaybe<StringFilter>;
  fields?: InputMaybe<FormFieldsFilter>;
};

export type FormConnectionEdges = {
  __typename?: 'FormConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Form>;
};

export type FormConnection = Connection & {
  __typename?: 'FormConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<FormConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePage: Page;
  createPage: Page;
  updateForm: Form;
  createForm: Form;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationUpdatePageArgs = {
  relativePath: Scalars['String']['input'];
  params: PageMutation;
};


export type MutationCreatePageArgs = {
  relativePath: Scalars['String']['input'];
  params: PageMutation;
};


export type MutationUpdateFormArgs = {
  relativePath: Scalars['String']['input'];
  params: FormMutation;
};


export type MutationCreateFormArgs = {
  relativePath: Scalars['String']['input'];
  params: FormMutation;
};

export type DocumentUpdateMutation = {
  page?: InputMaybe<PageMutation>;
  form?: InputMaybe<FormMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>;
  form?: InputMaybe<FormMutation>;
};

export type PageBlocksWelcomeHeroMutation = {
  message?: InputMaybe<Scalars['JSON']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
};

export type PageBlocksMutation = {
  welcomeHero?: InputMaybe<PageBlocksWelcomeHeroMutation>;
};

export type PageMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  blocks?: InputMaybe<Array<InputMaybe<PageBlocksMutation>>>;
};

export type FormFieldsMutation = {
  label?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
};

export type FormMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<InputMaybe<FormFieldsMutation>>>;
};

export type PagePartsFragment = { __typename: 'Page', title?: string | null, blocks?: Array<{ __typename: 'PageBlocksWelcomeHero', message?: any | null, image?: string | null } | null> | null };

export type FormPartsFragment = { __typename: 'Form', title?: string | null, fields?: Array<{ __typename: 'FormFields', label?: string | null, field?: string | null, style?: string | null } | null> | null };

export type PageQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename: 'Page', id: string, title?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksWelcomeHero', message?: any | null, image?: string | null } | null> | null } };

export type PageConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
}>;


export type PageConnectionQuery = { __typename?: 'Query', pageConnection: { __typename?: 'PageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PageConnectionEdges', cursor: string, node?: { __typename: 'Page', id: string, title?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksWelcomeHero', message?: any | null, image?: string | null } | null> | null } | null } | null> | null } };

export type FormQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type FormQuery = { __typename?: 'Query', form: { __typename: 'Form', id: string, title?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, fields?: Array<{ __typename: 'FormFields', label?: string | null, field?: string | null, style?: string | null } | null> | null } };

export type FormConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FormFilter>;
}>;


export type FormConnectionQuery = { __typename?: 'Query', formConnection: { __typename?: 'FormConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'FormConnectionEdges', cursor: string, node?: { __typename: 'Form', id: string, title?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, fields?: Array<{ __typename: 'FormFields', label?: string | null, field?: string | null, style?: string | null } | null> | null } | null } | null> | null } };

export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  __typename
  title
  blocks {
    __typename
    ... on PageBlocksWelcomeHero {
      message
      image
    }
  }
}
    `;
export const FormPartsFragmentDoc = gql`
    fragment FormParts on Form {
  __typename
  title
  fields {
    __typename
    label
    field
    style
  }
}
    `;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const FormDocument = gql`
    query form($relativePath: String!) {
  form(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FormParts
  }
}
    ${FormPartsFragmentDoc}`;
export const FormConnectionDocument = gql`
    query formConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FormFilter) {
  formConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FormParts
      }
    }
  }
}
    ${FormPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      page(variables: PageQueryVariables, options?: C): Promise<{data: PageQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageQueryVariables, query: string}> {
        return requester<{data: PageQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageQueryVariables, query: string}, PageQueryVariables>(PageDocument, variables, options);
      },
    pageConnection(variables?: PageConnectionQueryVariables, options?: C): Promise<{data: PageConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageConnectionQueryVariables, query: string}> {
        return requester<{data: PageConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageConnectionQueryVariables, query: string}, PageConnectionQueryVariables>(PageConnectionDocument, variables, options);
      },
    form(variables: FormQueryVariables, options?: C): Promise<{data: FormQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: FormQueryVariables, query: string}> {
        return requester<{data: FormQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: FormQueryVariables, query: string}, FormQueryVariables>(FormDocument, variables, options);
      },
    formConnection(variables?: FormConnectionQueryVariables, options?: C): Promise<{data: FormConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: FormConnectionQueryVariables, query: string}> {
        return requester<{data: FormConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: FormConnectionQueryVariables, query: string}, FormConnectionQueryVariables>(FormConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
  options?: { branch?: string }
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: { branch?: string },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    })

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "http://localhost:4001/graphql",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
  options?: {
    branch?: string
  }
) => {
  const requester = generateRequester(client, options)
  return getSdk(requester)
}

  