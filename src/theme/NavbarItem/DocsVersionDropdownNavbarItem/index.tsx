import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import {
  useDocsPreferredVersion,
  useDocsVersionCandidates,
} from '@docusaurus/theme-common';
import {translate} from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import { useAllActiveDocContexts, useAllVersions, useCurrentDocPlugins } from './utils';

const getVersionMainDoc = (version) =>
  version.docs.find((doc) => doc.id === version.mainDocId);

export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const { pathname } = useLocation();
  const pluginIds = useCurrentDocPlugins(pathname);

  // Check if multiple versions are available
  if (pluginIds.length < 2)
    return null;

  const activeDocContext = useAllActiveDocContexts(pluginIds);
  const versions = useAllVersions(pluginIds);
  //const { savePreferredVersionName } = useDocsPreferredVersion(pluginIds[0]);

  const versionLinks = versions.map((version) => {
    // We try to link to the same doc, in another version
    // When not possible, fallback to the "main doc" of the version
    // TODO Don't use label?
    const versionDoc =
      activeDocContext?.alternateDocVersions[version.label] ??
      getVersionMainDoc(version);
    return {
      isNavLink: true,
      label: version.label,
      to: versionDoc.path,
      isActive: () => version === activeDocContext?.activeVersion,
      onClick: () => {
        //savePreferredVersionName(version.label),
      },
    };
  });
  const items = [
    ...dropdownItemsBefore,
    ...versionLinks,
    ...dropdownItemsAfter,
  ];

  const dropdownVersion = useDocsVersionCandidates(docsPluginId)[0]; // Mobile dropdown is handled a bit differently

  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
          id: 'theme.navbar.mobileVersionsDropdown.label',
          message: 'Versions',
          description:
            'The label for the navbar versions dropdown on mobile view',
        })
      : dropdownVersion.label;
  const dropdownTo =
    mobile && items.length > 1
      ? undefined
      : getVersionMainDoc(dropdownVersion).path; // We don't want to render a version dropdown with 0 or 1 item. If we build
  // the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
  // We'd rather render a button instead of a dropdown

  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    );
  }

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={dropdownLabel}
      to={dropdownTo}
      items={items}
      isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
}
