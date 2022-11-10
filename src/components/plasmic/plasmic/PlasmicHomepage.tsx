// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5PkZx9c7sM1bvoSfz3hwLh
// Component: UM3Ic08c0eD1
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: lM7uxk50AAV/component
import Button2 from "../../Button2"; // plasmic-import: Y2T8I2DKDKS/component
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent

import { useScreenVariants as useScreenVariantsbvi6AlUwBvXDc } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Bvi6alUwBvXDc/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic.module.css"; // plasmic-import: 5PkZx9c7sM1bvoSfz3hwLh/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: UM3Ic08c0eD1/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: 3lKIkq_boTY/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iPdQ3T0J00s/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: 3v2twyVVRSu/icon
import imageWXwto5MOAf from "./images/image.svg"; // plasmic-import: wXwto5mOAf_/picture

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  search?: p.Flex<typeof Button2>;
  button?: p.Flex<"button">;
  h1?: p.Flex<"h1">;
  columns?: p.Flex<"div">;
  column?: p.Flex<"div">;
  link?: p.Flex<"a">;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbvi6AlUwBvXDc()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <div
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              sty.root
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___8INul)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__tmsNg)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dsAdD)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__rpqT)}
                    displayHeight={"40px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"40px" as const}
                    src={{
                      src: imageWXwto5MOAf,
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7QqV4
                    )}
                  >
                    {"snapdeal"}
                  </div>

                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    placeholder={"Search for products" as const}
                  />

                  <Button2
                    data-plasmic-name={"search"}
                    data-plasmic-override={overrides.search}
                    className={classNames("__wab_instance", sty.search)}
                    shape={"sharp" as const}
                    size={"minimal" as const}
                  >
                    <SearchsvgIcon
                      className={classNames(projectcss.all, sty.svg__rSuR0)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fY0Ef
                      )}
                    >
                      {"Search"}
                    </div>
                  </Button2>
                </p.Stack>

                <Button2
                  className={classNames("__wab_instance", sty.button2__q8TRf)}
                  color={"clear" as const}
                  size={"minimal" as const}
                >
                  <Icon38Icon
                    className={classNames(projectcss.all, sty.svg__wSFaS)}
                    role={"img"}
                  />

                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8Ekw4
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__uzApn
                        )}
                      >
                        {"Cart"}
                      </div>
                    </div>
                  ) : null}
                </Button2>

                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___9AV)}
                  >
                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__fAwMs
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__cjpNc
                          )}
                        >
                          {"Sign  In"}
                        </div>

                        <svg
                          className={classNames(projectcss.all, sty.svg__uipj)}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___3VU3D)}
                  >
                    <button
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button
                      )}
                    >
                      {"Sign up"}
                    </button>

                    {true ? (
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__x8Pve
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__n3UNu
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__kqj5Z
                            )}
                            role={"img"}
                          />
                        }
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__jD49Y
                          )}
                        >
                          {"Log in"}
                        </div>
                      </Button2>
                    ) : null}
                  </div>
                ) : null}
              </p.Stack>
            </p.Stack>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vhf7T
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Prproducts"}
                  </h1>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__tok28)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div
                  data-plasmic-name={"column"}
                  data-plasmic-override={overrides.column}
                  className={classNames(projectcss.all, sty.column)}
                >
                  <DataFetcher
                    className={classNames(
                      "__wab_instance",
                      sty.httpApiFetcher__faBh4
                    )}
                    dataName={"fetchedData" as const}
                    errorDisplay={
                      <ph.DataCtxReader>
                        {$ctx => "Error fetching data"}
                      </ph.DataCtxReader>
                    }
                    headers={{
                      "Content-Type": "application/json",
                      Accept: "application/json"
                    }}
                    loadingDisplay={
                      <ph.DataCtxReader>
                        {$ctx => "Loading..."}
                      </ph.DataCtxReader>
                    }
                    method={"GET" as const}
                    noLayout={false}
                    url={"https://dummyjson.com/products?limit=5" as const}
                  >
                    <ph.DataCtxReader>
                      {$ctx =>
                        (() => {
                          try {
                            return $ctx.fetchedData.products;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return [];
                            }
                            throw e;
                          }
                        })().map((currentItem, currentIndex) => (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox___9LxkD
                            )}
                            key={currentIndex}
                          >
                            <a
                              data-plasmic-name={"link"}
                              data-plasmic-override={overrides.link}
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link
                              )}
                              href={`/details/${(() => {
                                try {
                                  return currentItem.id;
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "[id]";
                                  }
                                  throw e;
                                }
                              })()}`}
                            >
                              <p.PlasmicImg
                                alt={""}
                                className={classNames(sty.img__aSk7H)}
                                displayHeight={"auto" as const}
                                displayMaxHeight={"none" as const}
                                displayMaxWidth={"100%" as const}
                                displayMinHeight={"0" as const}
                                displayMinWidth={"0" as const}
                                displayWidth={"206px" as const}
                                loading={"lazy" as const}
                                src={(() => {
                                  try {
                                    return currentItem.thumbnail;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}
                              />

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___2005O
                                )}
                              >
                                {(() => {
                                  try {
                                    return currentItem.title;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "Enter some text";
                                    }
                                    throw e;
                                  }
                                })()}
                              </div>
                            </a>

                            {true ? (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__vO3J7
                                )}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__lRigc
                                  )}
                                >
                                  {(() => {
                                    try {
                                      return currentItem.category;
                                    } catch (e) {
                                      if (e instanceof TypeError) {
                                        return "More Categories";
                                      }
                                      throw e;
                                    }
                                  })()}
                                </div>
                              </div>
                            ) : null}

                            <DataFetcher
                              className={classNames(
                                "__wab_instance",
                                sty.httpApiFetcher___1OlBu
                              )}
                              dataName={"fetchedData" as const}
                              errorDisplay={
                                <ph.DataCtxReader>
                                  {$ctx =>
                                    true ? (
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          sty.freeBox__bcrKd
                                        )}
                                      >
                                        {(() => {
                                          try {
                                            return currentItem.images;
                                          } catch (e) {
                                            if (e instanceof TypeError) {
                                              return [];
                                            }
                                            throw e;
                                          }
                                        })().map(
                                          (currentItem, currentIndex) => (
                                            <p.PlasmicImg
                                              alt={""}
                                              className={classNames(
                                                sty.img__bj6T
                                              )}
                                              displayHeight={"auto" as const}
                                              displayMaxHeight={"none" as const}
                                              displayMaxWidth={"15%" as const}
                                              displayMinHeight={"0" as const}
                                              displayMinWidth={"0" as const}
                                              displayWidth={"auto" as const}
                                              key={currentIndex}
                                              loading={"lazy" as const}
                                              src={(() => {
                                                try {
                                                  return currentItem;
                                                } catch (e) {
                                                  if (e instanceof TypeError) {
                                                    return undefined;
                                                  }
                                                  throw e;
                                                }
                                              })()}
                                            />
                                          )
                                        )}
                                      </div>
                                    ) : null
                                  }
                                </ph.DataCtxReader>
                              }
                              headers={{
                                "Content-Type": "application/json",
                                Accept: "application/json"
                              }}
                              loadingDisplay={
                                <ph.DataCtxReader>
                                  {$ctx => "Loading..."}
                                </ph.DataCtxReader>
                              }
                              method={"GET" as const}
                              noLayout={false}
                              url={(() => {
                                try {
                                  return (
                                    "https://dummyjson.com/products/1/" +
                                    currentItem.id
                                  );
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "https://dummyjson.com/products/1";
                                  }
                                  throw e;
                                }
                              })()}
                            />
                          </div>
                        ))
                      }
                    </ph.DataCtxReader>
                  </DataFetcher>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "textInput",
    "textbox",
    "search",
    "button",
    "h1",
    "columns",
    "column",
    "link"
  ],
  textInput: ["textInput", "textbox"],
  search: ["search"],
  button: ["button"],
  h1: ["h1"],
  columns: ["columns", "column", "link"],
  column: ["column", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  search: typeof Button2;
  button: "button";
  h1: "h1";
  columns: "div";
  column: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    search: makeNodeComponent("search"),
    button: makeNodeComponent("button"),
    h1: makeNodeComponent("h1"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
