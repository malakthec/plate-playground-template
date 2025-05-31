'use client';

import * as React from 'react';

import { FilePlugin, ImagePlugin } from '@udecode/plate-media/react';
import { useEditorReadOnly } from '@udecode/plate/react';

import { AIToolbarButton } from './ai-toolbar-button';
import { AlignDropdownMenu } from './align-dropdown-menu';
import { ColorDropdownMenu } from './color-dropdown-menu';
import { CommentToolbarButton } from './comment-toolbar-button';
import { EmojiDropdownMenu } from './emoji-dropdown-menu';
import { ExportToolbarButton } from './export-toolbar-button';
import { RedoToolbarButton, UndoToolbarButton } from './history-toolbar-button';
import { ImportToolbarButton } from './import-toolbar-button';
import { IndentListToolbarButton } from './indent-list-toolbar-button';
import { IndentTodoToolbarButton } from './indent-todo-toolbar-button';
import { LinkToolbarButton } from './link-toolbar-button';
import { MarkToolbarButton } from './mark-toolbar-button';
import { MediaToolbarButton } from './media-toolbar-button';
import { ModeDropdownMenu } from './mode-dropdown-menu';
import { MoreDropdownMenu } from './more-dropdown-menu';
import { TableDropdownMenu } from './table-dropdown-menu';
import { ToggleToolbarButton } from './toggle-toolbar-button';
import { ToolbarGroup } from './toolbar';
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu';

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="flex w-full">
      {!readOnly && (
        <>
          <ToolbarGroup>
            <UndoToolbarButton />
            <RedoToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <TurnIntoDropdownMenu />
          </ToolbarGroup>

          <ToolbarGroup>
            <MarkToolbarButton nodeType="bold" tooltip="Bold (⌘+B)" />
            <MarkToolbarButton nodeType="italic" tooltip="Italic (⌘+I)" />
            <MarkToolbarButton
              nodeType="underline"
              tooltip="Underline (⌘+U)"
            />
            <MarkToolbarButton
              nodeType="strikethrough"
              tooltip="Strikethrough (⌘+⇧+M)"
            />
            <MarkToolbarButton nodeType="code" tooltip="Code (⌘+E)" />
            <MarkToolbarButton nodeType="superscript" tooltip="Superscript" />
            <MarkToolbarButton nodeType="subscript" tooltip="Subscript" />
          </ToolbarGroup>

          <ToolbarGroup>
            <ColorDropdownMenu nodeType="color" tooltip="Text Color" />
            <ColorDropdownMenu
              nodeType="backgroundColor"
              tooltip="Highlight Color"
            />
          </ToolbarGroup>

          <ToolbarGroup>
            <AlignDropdownMenu />

            <IndentListToolbarButton variant="bulleted" />
            <IndentTodoToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <LinkToolbarButton />

            <ToggleToolbarButton />

            <MediaToolbarButton nodeType={ImagePlugin.key} />
            <MediaToolbarButton nodeType={FilePlugin.key} />

            <TableDropdownMenu />
            <EmojiDropdownMenu />

            <MoreDropdownMenu />
          </ToolbarGroup>
        </>
      )}

      <div className="grow" />

      <ToolbarGroup>
        <ModeDropdownMenu />

        {!readOnly && (
          <>
            <CommentToolbarButton />
            <AIToolbarButton />

            <ExportToolbarButton />
            <ImportToolbarButton />
          </>
        )}
      </ToolbarGroup>
    </div>
  );
}
