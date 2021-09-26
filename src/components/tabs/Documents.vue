<template>
  <b-row align-v="stretch" class="TabDocument">
    <b-col>
      <b-card fluid class="CardChoice h-100">
        <b-container class="mb-3">
          <b-row class="padding" align-v="center">
            <b-col class="px-0">
              <div>
              <b-input-group prepend="|" class="ButtonTemplate">
                <b-form-input v-model="inputSearch" placeholder="Rechercher dans un document"></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-success" @click="search"><b-icon icon="search" font-scale="1"></b-icon></b-button>
                </b-input-group-append>
              </b-input-group>
              </div>
            </b-col>
            <b-col class="px-0">
              <div v-if="filtred">
                <b-form inline>
                  <b-icon icon="question-circle-fill" font-scale="1" class="mx-2" style="color: #E0E0E0;"></b-icon>
                  <b-button  id="modalButton" @click="resetFilter" class="mx-2">RESET</b-button>
                  <span class="ResultLength mx-2"> {{ documentsFiltred.length }} documents trouvés </span>
                </b-form>
              </div>
              <div v-else class="d-inline">
                <b-button id="modalButton" v-b-modal.modalFilter>FILTRES</b-button>
              </div>
              <b-modal id="modalFilter" hide-footer hide-header>
                <div class="Modal">
                  <div class="mt-3">
                    <label class="modalLabel mb-0"> Origine du document</label>
                    <b-form-input id="listOrigin" list="input-list" v-model="inputOriginDocument" placeholder="Input text (default)" size="lg"></b-form-input>
                    <b-form-datalist id="listOrigin" :options='listOrigine'></b-form-datalist>
                  </div>
                  <div class="mt-3">
                    <label class="modalLabel mb-0">Type DE document</label>
                    <b-form-input v-model="inputTypeContract" placeholder="Input text (default)" size="lg"></b-form-input>
                  </div>
                  <div class="mt-3">
                    <label class="modalLabel mb-0">N° de séjour</label>
                    <b-form-input v-model="inputNumberSejour" placeholder="Input text (default)" size="lg"></b-form-input>
                  </div>
                  <div class="mt-3">
                  <label class="modalLabel mb-0">période</label>
                    <b-row>
                      <b-col>
                        <b-form-datepicker id="dateBegin" v-model="inputDateBegin" placeholder="Date de début" size="lg"></b-form-datepicker>
                        <div class="text-left pl-5 mt-5 mb-3">
                        <b-button variant="outline-secondary" @click="$bvModal.hide('modalFilter'); resetFilter()">Annuler</b-button>
                        </div>
                      </b-col>
                      <b-col>
                        <b-form-datepicker id="dateEnd" v-model="inputDateEnd" placeholder="Date de fin" size="lg"></b-form-datepicker>
                        <div class="text-right pr-5 mt-5 mb-3">
                        <b-button variant="primary" @click="$bvModal.hide('modalFilter'); filter();" :disabled="FilterButtonActive">Rechercher</b-button>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </b-modal>
            </b-col>
          </b-row>
        </b-container >
        <div v-if="documentsFiltred.length!==0">
          <b-table sticky-header no-border-collapse selectable select-mode="single" @row-selected="onRowSelected"  striped :items="documentsFiltred" :fields="fields" v-if="documents" class="Table">
            <template #cell(title)="datatitle">
              <b class="text short-text">{{ datatitle.value }}</b>
            </template>
            <template #cell(encounter)="dataencounter">
              <span v-if='dataencounter.value' class="text">{{ dataencounter.value.encounter_id + ' du ' + dataencounter.value.entry_date.replaceAll('-', '/') + ' au ' + dataencounter.value.out_date.replaceAll('-', '/') }}</span>
            </template>
          </b-table>
        </div>
        <div v-else class="CardContainer NoFiltred text-center">
          <div class="m-5">
            <b-icon icon="search" font-scale="10" style="color: #E0E0E0;"></b-icon>
          </div>
          <div class="my-4">
            <a class="text">LA RECHERCHE N’A DONNÉ AUCUN RÉSULTAT</a>
          </div>
        </div>
      </b-card>
    </b-col>
    <b-col v-if="documentsFiltred.length!==0">
      <b-card class="CardDoc h-100">
        <div v-if="selected.length!==0" class="CardContainer">
          <h5> {{ this.selected[0].title }}, par {{ this.selected[0].author }}, le {{ this.selected[0].document_date }}</h5>
          <span v-html="selected[0].displayed_text">  </span>
        </div>
        <div v-else class="overflow-auto">
          <label class="NoDocuments px-3 py-3">Aucun document sélectionné</label>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import data from '@/assets/data/documents.json'
export default {
  name: 'documents',
  data () {
    return {
      sortBy: 'document_type',
      sortDesc: false,
      inputSearch: null,
      fields: [
        { key: 'document_origin_code', label: 'Origine', sortable: true },
        { key: 'title', label: 'Titre', sortable: true },
        { key: 'encounter', label: 'Séjour', sortable: true },
        { key: 'document_type', label: 'Type de doc', sortable: true }
      ],
      documents: [],
      documentsFiltred: [],
      selected: [],
      inputOriginDocument: null,
      inputTypeContract: null,
      inputNumberSejour: null,
      inputDateBegin: null,
      inputDateEnd: null,
      filtred: false,
      FilterButtonActive: true,
      listOrigine: [],
      listType: []
    }
  },
  created () {
    var data = this.getDocuments()
    data.forEach(element => {
      if (!this.listOrigine.includes(element.document_origin_code)) {
        this.listOrigine.push(element.document_origin_code)
      }
      if (!this.listType.includes(element.document_type)) {
        this.listType.push(element.document_type)
      }
    })
    this.documents = data
    this.documentsFiltred = this.documents
  },
  methods: {
    getDocuments () {
      return data.matched_documents
    },
    onRowSelected (item) {
      this.selected = item
    },
    showModal () {
      this.$refs.modalFilter.show()
    },
    hideModal () {
      this.$refs.modalFilter.hide()
    },
    filter () {
      this.filtred = true
      var filterDoc = this.documents
      filterDoc = this.filterOrigin(filterDoc)
      filterDoc = this.filterType(filterDoc)
      filterDoc = this.filterNumberSejour(filterDoc)
      filterDoc = this.filterDateBegin(filterDoc)
      filterDoc = this.filterDateEnd(filterDoc)
      this.documentsFiltred = filterDoc
    },
    resetFilter () {
      this.filtred = false
      this.documentsFiltred = this.documents
      this.inputTypeContract = null
      this.inputOriginDocument = null
      this.inputNumberSejour = null
      this.inputDateBegin = null
      this.inputDateEnd = null
    },
    buttonEtat () {
      if ((this.inputTypeContract || this.inputTypeContract === '') &&
      (this.inputOriginDocument || this.inputOriginDocument === '') &&
      (this.inputNumberSejour || this.inputNumberSejour === '') &&
      (this.inputDateBegin || this.inputDateBegin === '') &&
      (this.inputDateEnd || this.inputDateEnd === '')
      ) {
        this.FilterButtonActive = true
      } else {
        this.FilterButtonActive = false
      }
    },
    filterOrigin (docs) {
      if (this.inputOriginDocument === null || this.inputOriginDocument === '') {
        return docs
      } else {
        var temp = []
        docs.forEach(element => {
          if (element.document_origin_code === this.inputOriginDocument) {
            temp.push(element)
          }
        })
        return temp
      }
    },
    filterType (docs) {
      if (this.inputTypeContract === null || this.inputTypeContract === '') {
        return docs
      } else {
        var temp = []
        docs.forEach(element => {
          if (element.document_type === this.inputTypeContract) {
            temp.push(element)
          }
        })
        return temp
      }
    },
    filterNumberSejour (docs) {
      if (this.inputNumberSejour === null || this.inputNumberSejour === '') {
        return docs
      } else {
        var temp = []
        docs.forEach(element => {
          if (element.encounter) {
            if (element.encounter.encounter_id === this.inputNumberSejour) {
              temp.push(element)
            }
          }
        })
        return temp
      }
    },
    filterDateBegin (docs) {
      console.log(this.inputDateBegin)
      if (this.inputDateBegin === null || this.inputDateBegin === '') {
        return docs
      } else {
        var temp = []
        docs.forEach(element => {
          if (element.encounter) {
            if (element.encounter.entry_date >= this.inputDateBegin) {
              temp.push(element)
            }
          }
        })
        return temp
      }
    },
    filterDateEnd (docs) {
      if (this.inputDateEnd === null || this.inputDateEnd === '') {
        return docs
      } else {
        var temp = []
        docs.forEach(element => {
          if (element.encounter) {
            if (element.encounter.out_date <= this.inputDateEnd) {
              temp.push(element)
            }
          }
        })
        return temp
      }
    },
    search () {
      this.filter()
      if (!this.inputSearch) return
      this.filtred = true
      var resDocs = []
      this.documentsFiltred.forEach(element => {
        if (element.title.toLowerCase().includes(this.inputSearch.toLowerCase()) || element.displayed_text.toLowerCase().includes(this.inputSearch.toLowerCase())) {
          var newelement = element.displayed_text.replace(this.inputSearch, "<span style='background-color:yellow'>" + this.inputSearch + '</span>')
          element.displayed_text = newelement
          resDocs.push(element)
        }
      })
      this.documentsFiltred = resDocs
    }
  },
  watch: {
    inputTypeContract: function (val) {
      this.buttonEtat()
    },
    inputOriginDocument: function (val) {
      this.buttonEtat()
    },
    inputNumberSejour: function (val) {
      this.buttonEtat()
    },
    inputDateBegin: function (val) {
      this.buttonEtat()
    },
    inputDateEnd: function (val) {
      this.buttonEtat()
    }
  }
}
</script>

<style lang="scss" scoped>
.TabDocument {
  margin-top: 1px;
}
.Table {
  .text {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    color: #000000;
  }
  .short-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.NoFiltred {
  .text {
    font-family: Assistant;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #BDBDBD;
  }
}
.CardContainer {
  height: 480px;;
}
.CardChoice {
  .btn {
    background-color: transparent;
    border-color: transparent;
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #343A40;

  }
  .btn-secondary:hover {
      color: #487DF0;
      background-color: #F2F2F2;
      border-color: #F2F2F2;
  }
  .b-table-sticky-header {
      overflow-y: auto;
      max-height: 500px;
  }
}
.ButtonTemplate {
  background-color: #F1F3F8;
  border-radius: 0.25rem;
  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    padding-left: 5px;
    padding-right: 2px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #343A40;
    text-align: center;
    white-space: nowrap;
    background-color: #F1F3F8;
    border: 0px solid ;
    border-radius: 0.25rem;
  }
  .form-control {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #F1F3F8;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-family: Assistant;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  .form-control {
    border: 0;
    padding-left: 0;
  }
}
.CardDoc {
  overflow: scroll;
  h5 {
    //styleName: Section Title;
    font-family: 'Assistant';
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #343A40;
  }
  a {
    font-family: 'Assistant';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  .NoDocuments {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #BDBDBD;
  }
}
.Modal {
  .modalLabel {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 36px;
    text-transform: uppercase;
    color: #343A40;
  }
  .btn-outline-secondary {
    font-family: Assistant;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 36px;
    color: #BDBDBD;
    border-color: white;
  }
  .btn-outline-secondary:hover {
    color: #487DF0;
    background-color: transparent;
    border-color: transparent;
  }
  .btn-primary {
    color: #fff;
    background-color: #487DF0;
    border-color: #487DF0;
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 36px;
    color: white;
  }
}
.ResultLength {
  font-family: Assistant;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #343A40;
}
</style>
