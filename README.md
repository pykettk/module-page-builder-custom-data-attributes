<div align="center">

<!-- Module Image Here -->

</div>

<h1 align="center">element119 | Page Builder Custom Data Attributes</h1>

<div align="center">

![status](https://img.shields.io/badge/status-active-5fc238.svg)
![github release](https://img.shields.io/github/v/release/pykettk/module-page-builder-custom-data-attributes?color=ffbf00&label=version)
![github release date](https://img.shields.io/github/release-date/pykettk/module-page-builder-custom-data-attributes?color=8b32a8&label=last%20release)
![magento](https://img.shields.io/badge/Magento-^2.4.3-ec6611.svg)
![license](https://img.shields.io/badge/license-OSL-ff00dd.svg)
![packagist downloads](https://img.shields.io/packagist/dt/element119/module-page-builder-custom-data-attributes?color=ff0000)

</div>

---

## 🤝 Compatibility
For Adobe Commerce, install
[`element119/module-page-builder-custom-data-attributes-commerce`](https://github.com/pykettk/module-page-builder-custom-data-attributes-commerce)
instead.

<br>

## 📝 Features
✔️ Allows custom data to be added to Page Builder content

✔️ Supports custom Page Builder content types

✔️ Gives store admins full over the `name` and `value` of custom attributes

✔️ Uses dynamic rows to allow admins to create, edit, and delete custom attributes as required

<br/>

## 🔌 Installation
Run the following command to *install* this module:
```bash
composer require element119/module-page-builder-custom-data-attributes
php bin/magento setup:upgrade
```

<br/>

## ⏫ Updating
Run the following command to *update* this module:
```bash
composer update element119/module-page-builder-custom-data-attributes
```

<br/>

## ❌ Uninstallation
Run the following command to *uninstall* this module:
```bash
composer remove element119/module-page-builder-custom-data-attributes
php bin/magento setup:upgrade
```

<br/>

## 🔧 Custom Content Types
To add custom data attributes to custom Page Builder content types simply copy the code below and paste it into the
`<element name="main">` node of all appropriate `view/adminhtml/pagebuilder/content_type/{{custom_content_type}}.xml`
files.

```xml
<attribute name="custom_attributes"
           source="data-custom-attributes"
           converter="Element119_PageBuilderCustomDataAttributes/js/converter/attribute/custom-data-attributes"/>
```

<br/>

An expanded XML tree is shown below to serve as an example.

```xml
<type name="your_custom_content_type_name">
    <appearances>
        <appearance name="your_custom_content_type_appearance">
            <elements>
                <element name="main">
                    <attribute name="custom_attributes"
                               source="data-custom-attributes"
                               converter="Element119_PageBuilderCustomDataAttributes/js/converter/attribute/custom-data-attributes"/>
                </element>
            </elements>
        </appearance>
    </appearances>
</type>
```

<br/>

## 📚 User Guide
### Configuration and Output
![full](https://user-images.githubusercontent.com/40261741/151176871-0ac887fe-00a5-4d4b-9686-5d6596b6c72f.png)

<br>

### Notes
The HTML `data-custom-attributes` attribute will not be added when there is no data to output.

![step-4](https://user-images.githubusercontent.com/40261741/151177231-a2829da7-bf69-4fec-a4aa-caf2ce213101.png)

---

<div align="center">

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/pykettk)

For those that want to support this project.

</div>
