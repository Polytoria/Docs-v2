# Polytoria 2.0 Documentation

Welcome to the **[Polytoria](https://polytoria.com) 2.0** documentation repository.

This repository serves as the authoritative reference for Polytoria 2.0's **Instances** and **Enums**. Its goal is to provide clear, structured, and up-to-date documentation for developers building games, systems, and tools on the Polytoria platform, using Polytoria's godot-based engine.

---

## Intended Audience

This repository is designed for:

* Polytoria enthusiasts to wish to contribute to game developers learning Polytoria's engine
* Advanced users who want precise API definitions

Basic programming knowledge is assumed.

---

## Contributing

Contributions are welcome, especially for:
* Correcting inaccuracies
* Expanding incomplete Instance or Enum documentation
* Improving clarity or consistency
* Correcting typos, grammar, etc
* Creating/contributing to cohesive and interactive tutorials

When contributing:
* Keep language technical and neutral
* Follow existing formatting and structure
* Avoid speculative or undocumented behavior
* Follow Polytoria's community guidelines

## How To Contribute

This repository can be forked, allowing any user to commit changes to their own repository before submitting a pull request for Polytoria staff members to review before accepting it to their own repository, similarly to how Polytoria 2.0's godot engine repository works.
* Once forked, you should have access to [pip](https://pypi.org/project/pip/) to install everything from [main/requirements.txt](requirements.txt). For building your repository, make sure you have [nodejs](https://nodejs.org/en/download).
* Once the requirements are installed, you may edit anything within [main/yaml](yaml) to your liking.
### This mkdocs based repository uses automated documentation with [main/autogen/mdgen.js](autogen/mdgen.js)
* Before testing your fork or committing changes for your repository, you need to run `node autogen/mdgen.js`. Afterwards you man run `mkdocs serve` to review your changes, unlike Polytoria 1.0's engine documentation repository, wherein which you only had to use mkdocs serve.

* Editing tutorials/asset files does not require you to autogen the documentation, you may directly access and edit them in [docs](docs)

## How yaml Values Work
You don't need to include most of them if you're setting their value to false, however some utilize the false value, here's the one's that do:
* APIexclusive. If true, it describes the object as "server-exclusive", and if false, it describes the object as "client-exclusive".
* IsInstantiatable. If false, it describes the object as unable to be replicated with `Instance.New()`.

---

## Notes

* This repository documents **current behavior**, not legacy systems
* Breaking changes should be reflected as soon as possible
* Documentation here is intended to match the live Polytoria 2.0 API