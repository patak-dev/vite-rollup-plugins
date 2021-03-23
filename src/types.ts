import type { Component } from 'vue'

export enum PluginStatus {
  Covered = 'covered',
  Included = 'included',
  Compatible = 'compatible',
  Incompatible = 'incompatible',
  NA = 'n/a',
  Todo = 'todo',
  Error = 'error',
}

export enum PluginCategory {
  Official = 'Official',
  Community = 'Community',
}

export interface Plugin {
  /**
   * The name of the plugin e.g. rollup-plugin-typescript2
   */
  name: string

  /**
   * A short description of the plugin
   */
  description: string

  /**
   * The plugin status
   */
  status: PluginStatus

  /**
   * The category the plugin belongs in
   */
  category?: PluginCategory

  /**
   * Link 
   */
  link?: string

  /**
   * Link to the documentation for the plugins
   */
  docs?: string

  enforce?: 'pre' | 'post'
  
  apply?: 'serve' | 'build'

  usage?: string,

  options?: string

  
  npm?: string
  
  /**
   * An info component that will be displayed in the info slot
   * of the Plugin Card
   */
  info?: Component,

  /**
   * A demo component that will be displayed in the default slot
   * of the Plugin Card
   */
  demo?: Component,
}
