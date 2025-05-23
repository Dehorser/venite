[@venite/ldf](../README.md) › [Globals](../globals.md) › ["rubric"](../modules/_rubric_.md) › [Rubric](_rubric_.rubric.md)

# Class: Rubric

Rubric represents liturgical instructions.

## Hierarchy

* [LiturgicalDocument](_liturgical_document_.liturgicaldocument.md)

  ↳ **Rubric**

## Index

### Constructors

* [constructor](_rubric_.rubric.md#constructor)

### Properties

* [api](_rubric_.rubric.md#optional-api)
* [audio](_rubric_.rubric.md#optional-audio)
* [category](_rubric_.rubric.md#category)
* [citation](_rubric_.rubric.md#optional-citation)
* [compile_hidden](_rubric_.rubric.md#optional-compile_hidden)
* [condition](_rubric_.rubric.md#condition)
* [date_created](_rubric_.rubric.md#optional-date_created)
* [date_modified](_rubric_.rubric.md#optional-date_modified)
* [day](_rubric_.rubric.md#optional-day)
* [display_format](_rubric_.rubric.md#optional-display_format)
* [display_settings](_rubric_.rubric.md#optional-display_settings)
* [hidden](_rubric_.rubric.md#optional-hidden)
* [id](_rubric_.rubric.md#optional-id)
* [label](_rubric_.rubric.md#label)
* [language](_rubric_.rubric.md#language)
* [lastRevision](_rubric_.rubric.md#lastrevision)
* [lookup](_rubric_.rubric.md#optional-lookup)
* [metadata](_rubric_.rubric.md#optional-metadata)
* [responsive](_rubric_.rubric.md#optional-responsive)
* [sharing](_rubric_.rubric.md#optional-sharing)
* [slug](_rubric_.rubric.md#slug)
* [source](_rubric_.rubric.md#optional-source)
* [style](_rubric_.rubric.md#optional-style)
* [type](_rubric_.rubric.md#type)
* [uid](_rubric_.rubric.md#optional-uid)
* [value](_rubric_.rubric.md#value)
* [version](_rubric_.rubric.md#version)
* [version_label](_rubric_.rubric.md#optional-version_label)

### Methods

* [availableDisplayFormats](_rubric_.rubric.md#availabledisplayformats)
* [availableLookupTypes](_rubric_.rubric.md#availablelookuptypes)
* [availableStyles](_rubric_.rubric.md#availablestyles)
* [availableTypes](_rubric_.rubric.md#availabletypes)
* [include](_rubric_.rubric.md#include)

## Constructors

###  constructor

\+ **new Rubric**(`data`: Partial‹[Rubric](_rubric_.rubric.md)›): *[Rubric](_rubric_.rubric.md)*

*Overrides [Liturgy](_liturgy_liturgy_.liturgy.md).[constructor](_liturgy_liturgy_.liturgy.md#constructor)*

*Defined in [rubric.ts:6](https://github.com/gbj/venite/blob/80526ac2/ldf/src/rubric.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | Partial‹[Rubric](_rubric_.rubric.md)› | {} |

**Returns:** *[Rubric](_rubric_.rubric.md)*

## Properties

### `Optional` api

• **api**? : *undefined | string*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[api](_responsive_prayer_.responsiveprayer.md#optional-api)*

*Defined in [liturgical-document.ts:109](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L109)*

The URL (as a string) for the API that provided the document, or against which it can be compiled.

___

### `Optional` audio

• **audio**? : *undefined | string*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[audio](_responsive_prayer_.responsiveprayer.md#optional-audio)*

*Defined in [liturgical-document.ts:203](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L203)*

URL of an audio file associated with the document.

___

###  category

• **category**: *string[]*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[category](_responsive_prayer_.responsiveprayer.md#category)*

*Defined in [liturgical-document.ts:99](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L99)*

Category tags allow searches for things like 'Psalm', 'Canticle', 'Confession', 'Eucharist'.

___

### `Optional` citation

• **citation**? : *string | null*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[citation](_responsive_prayer_.responsiveprayer.md#optional-citation)*

*Defined in [liturgical-document.ts:150](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L150)*

Biblical or other citation for the document.

**`example`** 
`John 1:14`

___

### `Optional` compile_hidden

• **compile_hidden**? : *undefined | false | true*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[compile_hidden](_responsive_prayer_.responsiveprayer.md#optional-compile_hidden)*

*Defined in [liturgical-document.ts:181](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L181)*

Marks a piece of a document that should be hidden after the document is compiled.
This can be used for e.g., explanatory rubrics that become redundant once a reading or psalm has been inserted.

___

###  condition

• **condition**: *object*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[condition](_responsive_prayer_.responsiveprayer.md#condition)*

*Defined in [liturgical-document.ts:102](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L102)*

An array of `Conditions`s determining whether the document should be displayed, given its day.

#### Type declaration:

* **conditions**: *[Condition](_condition_.condition.md)[]*

* **mode**: *"and" | "or"*

___

### `Optional` date_created

• **date_created**? : *any*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[date_created](_responsive_prayer_.responsiveprayer.md#optional-date_created)*

*Defined in [liturgical-document.ts:78](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L78)*

Timestamps for document creation and modification

___

### `Optional` date_modified

• **date_modified**? : *any*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[date_modified](_responsive_prayer_.responsiveprayer.md#optional-date_modified)*

*Defined in [liturgical-document.ts:79](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L79)*

___

### `Optional` day

• **day**? : *[LiturgicalDay](_calendar_liturgical_day_.liturgicalday.md)*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[day](_responsive_prayer_.responsiveprayer.md#optional-day)*

*Defined in [liturgical-document.ts:166](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L166)*

Optional: The liturgical day against which to compile the value, or against which a liturgy has been compiled.
[LiturgicalDay](_calendar_liturgical_day_.liturgicalday.md)

___

### `Optional` display_format

• **display_format**? : *[DisplayFormat](../modules/_index_.md#displayformat)*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[display_format](_responsive_prayer_.responsiveprayer.md#optional-display_format)*

*Defined in [liturgical-document.ts:93](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L93)*

Specify how the text should be displayed
Unison: the entire text is a congregational response
Abbreviated: only the beginning and end of the text should be displayed
Responsive: alternating parts (for psalms, by verse)
Antiphonal: alternating parts (for psalms, by half-verse)

___

### `Optional` display_settings

• **display_settings**? : *[DisplaySettings](_display_settings_.displaysettings.md)*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[display_settings](_responsive_prayer_.responsiveprayer.md#optional-display_settings)*

*Defined in [liturgical-document.ts:96](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L96)*

Display Settings (font, etc.) to be applied to the document as a whole

___

### `Optional` hidden

• **hidden**? : *undefined | false | true*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[hidden](_responsive_prayer_.responsiveprayer.md#optional-hidden)*

*Defined in [liturgical-document.ts:177](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L177)*

Marks a document hidden, so it will not display but will not be deleted
Typically used to a hide a subdocument within a larger liturgy without removing it entirely from the structure,
making it easier to restore or toggle on and off

___

### `Optional` id

• **id**? : *number | string*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[id](_responsive_prayer_.responsiveprayer.md#optional-id)*

*Defined in [liturgical-document.ts:75](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L75)*

If provided from a database, `id` is unique identifier/DB primary key

___

###  label

• **label**: *string*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[label](_responsive_prayer_.responsiveprayer.md#label)*

*Defined in [liturgical-document.ts:127](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L127)*

A human-readable name; either the name of the whole liturgy, or a label for a piece.

**`example`** 
`'Morning Prayer'`, `'The Apostles’ Creed'`

___

###  language

• **language**: *string*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[language](_responsive_prayer_.responsiveprayer.md#language)*

*Defined in [liturgical-document.ts:139](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L139)*

Language code (typically an ISO 639-1 two-letter code)

**`example`** 
`'en'`

___

###  lastRevision

• **lastRevision**: *number*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[lastRevision](_responsive_prayer_.responsiveprayer.md#lastrevision)*

*Defined in [liturgical-document.ts:115](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L115)*

Version number of the document

___

### `Optional` lookup

• **lookup**? : *[Lookup](../modules/_index_.md#lookup)*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[lookup](_responsive_prayer_.responsiveprayer.md#optional-lookup)*

*Defined in [liturgical-document.ts:193](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L193)*

Instructs the client to look up more information from the server

**`example`** 
// the 1st canticle in the 1979 BCP table for the current `LiturgicalDay`
{ type: 'psalm', style: 'canticle', lookup: { table: 'bcp1979', item: 1 }}

**`example`** 
// the morning psalms in the 30-day BCP cycle
{ type: 'psalm', style: 'canticle', lookup: { table: 'bcp_30day_psalter', item: 'morning_psalms' }}

**`example`** 
// the gospel reading in the Revised Common Lectionary
{ type: 'bible-reading', style: 'long', lookup: { table: 'rcl', item: 'gospel' }}

___

### `Optional` metadata

• **metadata**? : *any*

*Inherited from [Rubric](_rubric_.rubric.md).[metadata](_rubric_.rubric.md#optional-metadata)*

*Defined in [liturgical-document.ts:172](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L172)*

Optional: Child classes can store any additional properties they need within the `metadata` object.

**`example`** 
{ response: 'Thanks be to God.' }

___

### `Optional` responsive

• **responsive**? : *[Responsive](../enums/_liturgical_document_.responsive.md) | undefined*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[responsive](_responsive_prayer_.responsiveprayer.md#optional-responsive)*

*Defined in [liturgical-document.ts:197](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L197)*

Documents can be set to show only on mobile or only on larger-than-mobile
e.g., a hymn could show only the scanned image on tablet, and only the text on mobile

___

### `Optional` sharing

• **sharing**? : *[Sharing](_sharing_sharing_.sharing.md)*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[sharing](_responsive_prayer_.responsiveprayer.md#optional-sharing)*

*Defined in [liturgical-document.ts:112](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L112)*

Permissions for this document: whether it's public, shared with particular individuals, etc.

___

###  slug

• **slug**: *string*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[slug](_responsive_prayer_.responsiveprayer.md#slug)*

*Defined in [liturgical-document.ts:121](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L121)*

An identifying slug. Given the `slug`, the API should be able to identify this document.

**`example`** 
`'morning_prayer'`, `'lords_prayer'`

___

### `Optional` source

• **source**? : *[Citation](_citation_citation_.citation.md) | null*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[source](_responsive_prayer_.responsiveprayer.md#optional-source)*

*Defined in [liturgical-document.ts:155](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L155)*

Source for the physical resource within which the document can be found

**`example`** 
{ source: 'bcp1979', 'citation': 'p. 123' }

___

### `Optional` style

• **style**? : *string | null*

*Inherited from [Liturgy](_liturgy_liturgy_.liturgy.md).[style](_liturgy_liturgy_.liturgy.md#optional-style)*

*Defined in [liturgical-document.ts:85](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L85)*

An optional string that clarifies the variety; for example, a `Text` could be of the `prayer` style.

___

###  type

• **type**: *"rubric"*

*Overrides [LiturgicalDocument](_liturgical_document_.liturgicaldocument.md).[type](_liturgical_document_.liturgicaldocument.md#type)*

*Defined in [rubric.ts:5](https://github.com/gbj/venite/blob/80526ac2/ldf/src/rubric.ts#L5)*

___

### `Optional` uid

• **uid**? : *undefined | string*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[uid](_responsive_prayer_.responsiveprayer.md#optional-uid)*

*Defined in [liturgical-document.ts:161](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L161)*

Optional: A unique identifying string based on the slug, for compiled liturgies with multiple instances of the same prayer.

**`example`** 
`'gloria_patri_0'`, `'gloria_patri_1'`

___

###  value

• **value**: *string[]*

*Overrides [LiturgicalDocument](_liturgical_document_.liturgicaldocument.md).[value](_liturgical_document_.liturgicaldocument.md#optional-value)*

*Defined in [rubric.ts:6](https://github.com/gbj/venite/blob/80526ac2/ldf/src/rubric.ts#L6)*

___

###  version

• **version**: *string | object*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[version](_responsive_prayer_.responsiveprayer.md#version)*

*Defined in [liturgical-document.ts:145](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L145)*

Identifying code for the version of a liturgy, prayer, psalm, or Bible reading.

**`example`** 
`'Rite-II'`, `'bcp1979'`, `'coverdale'`, `'NRSV'`, `{ preference: "bibleVersion" }`

___

### `Optional` version_label

• **version_label**? : *string | null*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[version_label](_responsive_prayer_.responsiveprayer.md#optional-version_label)*

*Defined in [liturgical-document.ts:133](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L133)*

Optional: A human-readable name for this particular version of a larger category of prayer or liturgy.

**`example`** 
`'Lord’s Prayer (Traditional)'`

## Methods

###  availableDisplayFormats

▸ **availableDisplayFormats**(): *never[]*

*Overrides [Meditation](_meditation_.meditation.md).[availableDisplayFormats](_meditation_.meditation.md#availabledisplayformats)*

*Defined in [rubric.ts:13](https://github.com/gbj/venite/blob/80526ac2/ldf/src/rubric.ts#L13)*

**Returns:** *never[]*

___

###  availableLookupTypes

▸ **availableLookupTypes**(): *ReadonlyArray‹string›*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[availableLookupTypes](_responsive_prayer_.responsiveprayer.md#availablelookuptypes)*

*Defined in [liturgical-document.ts:239](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L239)*

Returns the list of all possible `lookup.type` values

**Returns:** *ReadonlyArray‹string›*

___

###  availableStyles

▸ **availableStyles**(): *ReadonlyArray‹string›*

*Inherited from [Liturgy](_liturgy_liturgy_.liturgy.md).[availableStyles](_liturgy_liturgy_.liturgy.md#availablestyles)*

*Defined in [liturgical-document.ts:234](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L234)*

Returns the list of all possible `style` values. Child classes should override if they have styles available.

**Returns:** *ReadonlyArray‹string›*

___

###  availableTypes

▸ **availableTypes**(): *ReadonlyArray‹string›*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[availableTypes](_responsive_prayer_.responsiveprayer.md#availabletypes)*

*Defined in [liturgical-document.ts:229](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L229)*

Returns the list of all possible `type` values

**Returns:** *ReadonlyArray‹string›*

___

###  include

▸ **include**(`day`: [LiturgicalDay](_calendar_liturgical_day_.liturgicalday.md), `prefs`: [ClientPreferences](_liturgy_client_preferences_.clientpreferences.md)): *boolean*

*Inherited from [ResponsivePrayer](_responsive_prayer_.responsiveprayer.md).[include](_responsive_prayer_.responsiveprayer.md#include)*

*Defined in [liturgical-document.ts:207](https://github.com/gbj/venite/blob/80526ac2/ldf/src/liturgical-document.ts#L207)*

Evaluates the full set of conditions attached to the document and returns a boolean of whether it should be included
given the day and assigned preferences

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`day` | [LiturgicalDay](_calendar_liturgical_day_.liturgicalday.md) | - |
`prefs` | [ClientPreferences](_liturgy_client_preferences_.clientpreferences.md) | {} |

**Returns:** *boolean*
